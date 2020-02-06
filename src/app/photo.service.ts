import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  BASE_URL = 'http://localhost:8080/api/photos'
  constructor(private http: HttpClient) {
  }
  getAllPhotos() {
    return this.http.get(`${this.BASE_URL}/all`);
  }
}
