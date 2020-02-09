import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from '../../service/utilisateur.service';
import {Utilisateur} from '../../model/utilisateur';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user: Utilisateur;
  constructor(private userService: UtilisateurService) { }

  ngOnInit() {
    const pseudo = sessionStorage.getItem('pseudo');
    this.userService.getUserByPseudo(pseudo).subscribe(
      user => this.user = user
    );
  }

}
