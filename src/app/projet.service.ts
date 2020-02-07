import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  BASE_URL = 'http://localhost:8080/api/projet';

  constructor(private http: HttpClient) {
  }

  getAllProjets() {
    return this.http.get(`${this.BASE_URL}/all`);
  }
}
