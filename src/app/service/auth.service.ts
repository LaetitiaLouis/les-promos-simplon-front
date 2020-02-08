import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from '../model/utilisateur';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,
              private router: Router) { }

  login(pseudo, motDePasse) {
    this.http.post('http://localhost:8080/api/utilisateurs/connect', {pseudo, motDePasse}).subscribe(
      (user: Utilisateur) => {
        console.log(user);
        this.router.navigate(['']);
      }
    );
  }
}
