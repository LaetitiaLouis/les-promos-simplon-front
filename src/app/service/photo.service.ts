import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from '../model/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  BASE_URL = 'http://localhost:8080/api/photos';

  constructor(private http: HttpClient) {
  }

  getAllPhotos() {
    return this.http.get(`${this.BASE_URL}/all`);
  }

  getPhotoById(id: number): Observable<Photo> {
    return this.http.get<Photo>(`${this.BASE_URL}/findById?id=${id}`);
  }

  getPhotoByCategorie(categorie: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.BASE_URL}/findByCategorie?categorie=${categorie}`);
  }

  uploadPhotoInfos(photo: Photo): Observable<Photo> {
    return this.http.post<Photo>(`${this.BASE_URL}/new`, photo);
  }

  uploadPhotoFile(formData: FormData, photoId: number, userId: number, isProfile: boolean): Observable<Photo> {
    return this.http.post<Photo>(`${this.BASE_URL}/upload?photoId=${photoId}&userId=${userId}&isProfile=${isProfile}`, formData);
  }
}
