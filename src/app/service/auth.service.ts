import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from '../model/utilisateur';
import {Router} from '@angular/router';
import {ErrorService} from './error.service';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,
              private router: Router,
              private es: ErrorService) {}

  /**
   * Vérifier si les identifiants correspondent:
   *  - Si oui enregistrer le pseudo dans le session storage
   *  - Si non afficher un message d'erreur
   * @param pseudo Le champ pseudo du formulaire
   * @param motDePasse Le champ mot de passe du formulaire
   */
  login(pseudo, motDePasse): Observable<Utilisateur> {
    return this.http.post<Utilisateur>('http://localhost:8080/api/utilisateurs/connect', {pseudo, motDePasse}).pipe(
      tap(user => sessionStorage.setItem('pseudo', user.pseudo)),
      map(result => this.router.navigate(['/profil'])),
      catchError(this.es.handleError('Pseudo ou mot de passe invalide'))
    );
  }

  /**
   * Vérifier qu'un utilisateur est connecté en regardant si
   * le champ pseudo est rempli dans le session storage
   */
  isLoggedIn() {
    const pseudo = sessionStorage.getItem('pseudo');
    return (pseudo !== null);
  }

  /**
   * Se déconnecter en supprimant le champ pseudo du session storage
   */
  logout() {
    sessionStorage.removeItem('pseudo');
    this.router.navigate(['/connexion']);
  }

}
