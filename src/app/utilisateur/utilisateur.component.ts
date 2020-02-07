
import {Component, Input, OnInit} from '@angular/core';
import {UtilisateurService} from '../utilisateur.service';
import {ActivatedRoute} from '@angular/router';
import {Utilisateur} from '../model/utilisateur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  @Input() utilisateurs: Utilisateur[];
  constructor(private utilisateurService: UtilisateurService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>
      this.utilisateurService.getAllUsers().subscribe(
        (utilisateurs: Utilisateur[]) => this.utilisateurs = utilisateurs
      )
    );
  }

}
