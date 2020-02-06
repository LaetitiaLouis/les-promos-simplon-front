import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from './model/utilisateur';



@Injectable({
  providedIn: 'root'
})

export class UtilisateurService {
  BASE_URL = 'http://localhost:8080/api/utilisateurs';
  constructor(private http: HttpClient) {
  }
  getAllUsers() {
    return this.http.get(`${this.BASE_URL}/all`);
  }

  getUserById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.BASE_URL}/findById?id=${id}`);
  }

  checkIfPseudoExists(pseudo: string) {
    return this.http.get(`${this.BASE_URL}/pseudoExists?pseudo=${pseudo}`);
  }

  checkIfEmailExists(email: string) {
    return this.http.get(`${this.BASE_URL}/emailExists?email=${email}`);
  }


}
