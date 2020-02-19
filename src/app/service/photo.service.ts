import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from '../model/photo';
import {ErrorService} from './error.service';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {UtilisateurService} from './utilisateur.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  BASE_URL = 'http://localhost:8080/api/photos';

  constructor(private http: HttpClient,
              private userService: UtilisateurService,
              private es: ErrorService) {
  }

  /**
   * Obtenir la liste de toutes les photos sauf les photos de profil
   */
  getAllPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.BASE_URL}/all`).pipe(
      catchError(this.es.handleError()),
      map(photos => photos.filter(photo => photo.categorie !== 'profil'))
    );
  }

  /**
   * Obtenir une photo par son id
   * @param id L'id de la photo à chercher
   */
  getPhotoById(id: number): Observable<Photo> {
    return this.http.get<Photo>(`${this.BASE_URL}/findById?id=${id}`);
  }

  /**
   * Obtenir la liste des photos d'une catégorie
   * @param categorie La catégorie souhaitée
   */
  getPhotoByCategorie(categorie: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.BASE_URL}/findByCategorie?categorie=${categorie}`)
      .pipe(catchError(this.es.handleError('Aucune photo dans cette catégorie'))
      );
  }

  /**
   * Requète d'enregistement de l'objet photo
   * @param photo L'objet photo à enregistrer
   */
  savePhotoInfos(photo: Photo): Observable<Photo> {
    return this.http.post<Photo>(`${this.BASE_URL}/new`, photo);
  }

  /**
   * Requète d'enregistrement du fichier photo
   * @param formData Le formData contenant le fichier photo
   * @param photoId L'id de l'objet photo
   * @param userId L'id de l'utilisateur postant la photo
   */
  uploadPhotoFile(formData: FormData, photoId: number, userId: number): Observable<Photo> {
    return this.http.post<Photo>(`${this.BASE_URL}/upload?photoId=${photoId}&userId=${userId}`, formData);
  }

  /**
   * Uploader une photo
   * @param photo L'objet photo
   * @param formData Le formData contenant le fichier photo
   */
  savePhoto(photo: Photo, formData: FormData): Observable<any> {
    const pseudo = sessionStorage.getItem('pseudo');
    return this.savePhotoInfos(photo).pipe(
      mergeMap(photoResult => this.userService.getUserByPseudo(pseudo).pipe(
        mergeMap(user => this.uploadPhotoFile(formData, photoResult.id, user.id)),
        map(this.es.handleSuccess('Photo sauvegardée')),
        catchError(this.es.handleError()))
      )
    );
  }

  /**
   * Supprimer une photo
   * @param id L'id de la photo à supprimer
   */
  deletePhoto(id: number) {
    return this.http.delete(`${this.BASE_URL}/delete?id=${id}`, {responseType: 'text'})
      .pipe(
        map(this.es.handleSuccess()),
        catchError(this.es.handleError())
      );
  }
}
