import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Promo} from '../model/promo';

@Injectable({
  providedIn: 'root'
})
export class PromoService {
  BASE_URL = 'http://localhost:8080/api/promos';
  constructor(private http: HttpClient) { }

  /**
   * Obtenir la liste de toutes les promotions
   */
  getAll(): Observable<Promo[]> {
    return this.http.get<Promo[]>(`${this.BASE_URL}/all`);
  }

  /**
   * Obtenir une promotion par nom
   * @param nom Le nom de la promotion recherchée
   */
  findByNom(nom: string): Observable<Promo> {
    return this.http.get<Promo>(`${this.BASE_URL}/findById?nom=${nom}`);
  }
}
