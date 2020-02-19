import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from '../model/utilisateur';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {ErrorService} from './error.service';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,
              private router: Router,
              private es: ErrorService) {}

  /**
   * T
   * @param pseudo
   * @param motDePasse
   */
  login(pseudo, motDePasse): Observable<Utilisateur> {
    return this.http.post<Utilisateur>('http://localhost:8080/api/utilisateurs/connect', {pseudo, motDePasse}).pipe(
      tap(user => sessionStorage.setItem('pseudo', user.pseudo)),
      map(result => this.router.navigate(['/profil'])),
      catchError(this.es.handleError('Pseudo ou mot de passe invalide'))
    );
  }

  isLoggedIn() {
    const pseudo = sessionStorage.getItem('pseudo');
    return (pseudo !== null);
  }

  logout() {
    sessionStorage.removeItem('pseudo');
    this.router.navigate(['/connexion']);
  }

}
