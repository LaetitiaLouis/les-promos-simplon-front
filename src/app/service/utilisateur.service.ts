import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from '../model/utilisateur';
import {FormGroup} from '@angular/forms';



@Injectable({
  providedIn: 'root'
})

export class UtilisateurService {
  BASE_URL = 'http://localhost:8080/api/utilisateurs';
  constructor(private http: HttpClient) {
  }
  getAllUsers(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.BASE_URL}/all`);
  }

  getUserById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.BASE_URL}/findById?id=${id}`);
  }

  getUserByPseudo(pseudo: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.BASE_URL}/findByPseudo?pseudo=${pseudo}`);
  }

  checkIfPseudoExists(pseudo: string) {
    return this.http.get(`${this.BASE_URL}/pseudoExists?pseudo=${pseudo}`);
  }

  checkIfEmailExists(email: string) {
    return this.http.get(`${this.BASE_URL}/emailExists?email=${email}`);
  }

  registerUser(formData: Utilisateur): Observable<Utilisateur> {
    let url = 'http://localhost:8080/api';
    if (formData.isApprenant) {
      url = `${url}/apprenants/new`;
    } else {
      url = `${url}/formateurs/new`;
    }
    return this.http.post<Utilisateur>(url, formData);
  }

}
