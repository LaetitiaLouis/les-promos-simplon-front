import {Component, OnInit} from '@angular/core';
import {UtilisateurService} from '../service/utilisateur.service';
import {Utilisateur} from '../model/utilisateur';
import {ApprenantService} from '../service/aprennant.service';
import {FormateurService} from '../service/formateur.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  users$: Observable<Utilisateur[]>;
  usersFilters = ['tous', 'apprenants', 'formateurs' ];
  searchFilters =  ['nom', 'prénom', 'nom et prénom'];
  usersToShow = 'tous';
  searchBy = 'nom';
  searchWord: string;

  constructor(private utilisateurService: UtilisateurService,
              private apprenantService: ApprenantService,
              private formateurService: FormateurService) { }

  /**
   * Récupérer la liste de tout les utilisateurs lors de l'initialisation
   */
  ngOnInit() {
    this.users$ = this.utilisateurService.getAllUsers();
  }

  /**
   * Récupérer la liste correspondant au filte séléctionné
   */
  userFilterChanged() {
    if (this.usersToShow === 'tous') {
      this.users$ = this.utilisateurService.getAllUsers();
    } else if (this.usersToShow === 'apprenants') {
      this.users$ = this.apprenantService.getAllApprenants();
    } else if (this.usersToShow === 'formateurs') {
      this.users$ = this.formateurService.getAllFormateurs();
    }
  }

  /**
   * Faire une recherche avec le filtre correspondant au menu déroulant
   */
  search() {
    if (this.searchBy === 'nom') {
      this.users$ = this.utilisateurService.getUserByNom(this.searchWord);
    } else if (this.searchBy === 'prenom') {
      this.users$ = this.utilisateurService.getUserByPrenom(this.searchWord);
    } else {
      this.users$ = this.utilisateurService.getUserByNomPrenom(this.searchWord);
    }
  }

}
