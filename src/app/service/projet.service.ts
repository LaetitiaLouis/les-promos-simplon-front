import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Projet} from '../model/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  BASE_URL = 'http://localhost:8080/api/projets';

  constructor(private http: HttpClient) {
  }

  /**
   * Obtenir la liste de tous les projets
   */
  getAllProjets(): Observable<Projet[]> {
    return this.http.get<Projet[]>(`${this.BASE_URL}/all`);
  }

  /**
   * Obtenir un apprenant par son id
   * @param id L'id de l'apprenant recherché
   */
  getByIdApprenant(id: number): Observable<Projet[]> {
    return this.http.get<Projet[]>(`${this.BASE_URL}/findByIdApprenant?idApprenant=${id}`);
  }
}
