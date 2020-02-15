import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from '../model/utilisateur';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  login(pseudo, motDePasse) {
    this.http.post('http://localhost:8080/api/utilisateurs/connect', {pseudo, motDePasse}).subscribe(
      (user: Utilisateur) => {
        sessionStorage.setItem('pseudo', user.pseudo);
        this.router.navigate(['/profil']);
      },
      error => this.openSnackBar('Pseudo ou mot de passe incorrect', '')
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

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}

