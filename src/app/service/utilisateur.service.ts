import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from '../model/utilisateur';
import {catchError} from 'rxjs/operators';
import {ErrorService} from './error.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  BASE_URL = 'http://localhost:8080/api/utilisateurs';
  constructor(private http: HttpClient,
              private es: ErrorService)  {
  }



  getAllUsers(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.BASE_URL}/all`)
      .pipe(catchError(this.es.handleError()));
  }

  getUserByNomPrenom(nomPrenom: string): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.BASE_URL}/findByNomPrenom?nomPrenom=${nomPrenom}`)
      .pipe(catchError(this.es.handleError()));
  }


  getUserByNom(nom: string): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.BASE_URL}/findByNom?nom=${nom}`)
      .pipe(catchError(this.es.handleError()));
  }
  getUserByPrenom(prenom: string): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.BASE_URL}/findByPrenom?prenom=${prenom}`)
      .pipe(catchError(this.es.handleError()));
  }
  getUserById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.BASE_URL}/findById?id=${id}`)
      .pipe(catchError(this.es.handleError()));
  }

  getUserByPseudo(pseudo: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.BASE_URL}/findByPseudo?pseudo=${pseudo}`)
      .pipe(catchError(this.es.handleError()));
  }

  checkIfPseudoExists(pseudo: string) {
    return this.http.get(`${this.BASE_URL}/pseudoExists?pseudo=${pseudo}`);
  }

  checkIfEmailExists(email: string) {
    return this.http.get(`${this.BASE_URL}/emailExists?email=${email}`);
  }
  updateUser(user: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`http://localhost:8080/api/apprenants/update`, user)
      .pipe(catchError(this.es.handleError()));
  }
  registerUser(formData: Utilisateur): Observable<Utilisateur> {
    let url = 'http://localhost:8080/api';
    if (formData.isApprenant) {
      url = `${url}/apprenants/new`;
    } else {
      url = `${url}/formateurs/new`;
    }
    return this.http.post<Utilisateur>(url, formData)
      .pipe(catchError(this.es.handleError()));
  }

}
