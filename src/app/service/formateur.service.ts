// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import {HttpClient} from '@angular/common/http';
// @ts-ignore
import {Observable} from 'rxjs';
import {Utilisateur} from '../model/utilisateur';



// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class FormateurService {
  BASE_URL = 'http://localhost:8080/api/formateurs';

  constructor(private http: HttpClient) {
  }

  getAllFormateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.BASE_URL}/all`);
  }
}
