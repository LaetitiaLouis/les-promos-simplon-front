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

  /**
   * Obtenir la liste de tout les utilisateurs
   */
  getAllUsers(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.BASE_URL}/all`)
      .pipe(catchError(this.es.handleError()));
  }

  /**
   * Obtenir la liste des utilisateurs dont le nom ou le prénom contiennent le mot fourni
   * @param nomPrenom Le mot recherché
   */
  getUserByNomPrenom(nomPrenom: string): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.BASE_URL}/findByNomPrenom?nomPrenom=${nomPrenom}`)
      .pipe(catchError(this.es.handleError()));
  }

  /**
   * Obtenir la liste des utilisateurs dont le nom contient le mot fourni
   * @param nom Le mot recherché
   */
  getUserByNom(nom: string): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.BASE_URL}/findByNom?nom=${nom}`)
      .pipe(catchError(this.es.handleError()));
  }

  /**
   * Obtenir la liste des utilisateurs dont le prénom contient le mot recherché
   * @param prenom Le mot recherché
   */
  getUserByPrenom(prenom: string): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.BASE_URL}/findByPrenom?prenom=${prenom}`)
      .pipe(catchError(this.es.handleError()));
  }

  /**
   * Obtenir un utilisateur par id
   * @param id L'id de l'utilisateur recherché
   */
  getUserById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.BASE_URL}/findById?id=${id}`)
      .pipe(catchError(this.es.handleError()));
  }

  /**
   * Obtenir un utilisateur par son pseudo
   * @param pseudo Le pseudo recherché
   */
  getUserByPseudo(pseudo: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.BASE_URL}/findByPseudo?pseudo=${pseudo}`)
      .pipe(catchError(this.es.handleError()));
  }

  /**
   * Vérifier si le pseudo existe
   * @param pseudo Le pseudo à vérifier
   */
  checkIfPseudoExists(pseudo: string) {
    return this.http.get(`${this.BASE_URL}/pseudoExists?pseudo=${pseudo}`);
  }

  /**
   * Vérifier si l'adresse mail existe
   * @param email L'adresse mail à vérifier
   */
  checkIfEmailExists(email: string) {
    return this.http.get(`${this.BASE_URL}/emailExists?email=${email}`);
  }

  /**
   * Modifier un utilisateur
   * @param user L'utilisateur modifié
   */
  updateUser(user: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`http://localhost:8080/api/apprenants/update`, user)
      .pipe(catchError(this.es.handleError()));
  }

  /**
   * Enregistrer un apprenant ou un formateur
   * @param formData L'objet utilisateur à enregister
   */
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
