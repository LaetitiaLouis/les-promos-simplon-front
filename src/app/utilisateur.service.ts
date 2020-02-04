import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UtilisateurService {
BASE_URL = 'http://localhost:8080/api/utilisateurs'
  constructor(private http: HttpClient) {
  }
  getAllUsers() {
    return this.http.get(`${this.BASE_URL}/all`);
  }

  getUserById(id) {
    return this.http.get(`${this.BASE_URL}/findById?id=${id}`);
  }
}