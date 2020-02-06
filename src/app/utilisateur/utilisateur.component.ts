import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from '../utilisateur.service';
import {ActivatedRoute} from '@angular/router';
import {Utilisateur} from '../model/utilisateur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
utilisateur: Utilisateur[];
  constructor(private utilisateurService: UtilisateurService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>
      this.utilisateurService.getAllUsers().subscribe(
        utilisateur => this.utilisateur = utilisateur
      )
    );
  }

}
