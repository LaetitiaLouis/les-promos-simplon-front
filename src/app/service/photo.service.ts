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

  getAllPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.BASE_URL}/all`).pipe(
      catchError(this.es.handleError()),
      map(photos => photos.filter(photo => photo.categorie !== 'profil'))
    );
  }

  getPhotoById(id: number): Observable<Photo> {
    return this.http.get<Photo>(`${this.BASE_URL}/findById?id=${id}`);
  }

  getPhotoByCategorie(categorie: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.BASE_URL}/findByCategorie?categorie=${categorie}`)
      .pipe(catchError(this.es.handleError('Aucune photo dans cette catégorie'))
      );
  }

  savePhotoInfos(photo: Photo): Observable<Photo> {
    return this.http.post<Photo>(`${this.BASE_URL}/new`, photo);
  }

  uploadPhotoFile(formData: FormData, photoId: number, userId: number): Observable<Photo> {
    return this.http.post<Photo>(`${this.BASE_URL}/upload?photoId=${photoId}&userId=${userId}`, formData);
  }
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
  deletePhoto(id: number) {

    return this.http.delete(`${this.BASE_URL}/delete?id=${id}`, {responseType: 'text'})
      .pipe(
        map(this.es.handleSuccess()),
        catchError(this.es.handleError())
      );
  }
}
