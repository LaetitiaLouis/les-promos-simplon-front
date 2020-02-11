// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from '../model/utilisateur';
// @ts-ignore
import {Router} from '@angular/router';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,
              private router: Router) { }

  login(pseudo, motDePasse) {
    this.http.post('http://localhost:8080/api/utilisateurs/connect', {pseudo, motDePasse}).subscribe(
      (user: Utilisateur) => {
        sessionStorage.setItem('pseudo', user.pseudo);
        this.router.navigate(['/profil']);
      }
    );
  }
  isLoggedIn() {
    const pseudo = sessionStorage.getItem('pseudo');
    return !(pseudo === null);
  }

  logout() {
    sessionStorage.removeItem('pseudo');
    this.router.navigate(['/connexion']);
  }
}
