// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import {HttpClient} from '@angular/common/http';
// @ts-ignore
import {Observable} from 'rxjs';
import {Utilisateur} from '../model/utilisateur';
import {FormGroup} from '@angular/forms';



// @ts-ignore
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
getUserByNomPrenom(nomPrenom: string): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.BASE_URL}/findByNomPrenom?nomPrenom=${nomPrenom}`);
}

  getUserByNom(nom: string): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.BASE_URL}/findByNom?nom=${nom}`);
  }
  getUserByPrenom(prenom: string): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.BASE_URL}/findByPrenom?prenom=${prenom}`);
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
  updateUser(user: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`http://localhost:8080/api/apprenants/update`, user);
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
