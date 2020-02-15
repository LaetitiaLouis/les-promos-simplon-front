import {Component, OnInit} from '@angular/core';
import {UtilisateurService} from '../service/utilisateur.service';
import {Utilisateur} from '../model/utilisateur';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApprenantService} from '../service/aprennant.service';
import {FormateurService} from '../service/formateur.service';
import {Observable} from 'rxjs';

interface Recherche {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  searchQuerys: Recherche[] = [
    {value: 'nom-0', viewValue: 'Nom'},
    {value: 'prenom-1', viewValue: 'Prenom'},
    {value: 'nomPrenom-2', viewValue: 'Nom/Prenom'}
  ];
  users$: Observable<Utilisateur[]>;
  searchForm: FormGroup;
  submitted = false;
  choixUser: FormGroup;
  constructor(private fb: FormBuilder, private utilisateurService: UtilisateurService,
              private apprenantService: ApprenantService,
              private formateurService: FormateurService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['', Validators.required],
      query: ['prenom-1', Validators.required]
    });
    this.choixUser = this.fb.group({
      choixFiltreUser: ['Tous les utilisateurs', Validators.required]
    });
    this.users$ = this.utilisateurService.getAllUsers();
  }
  affichageUtilisateur(form) {
    if (form.choixFiltreUser === 'Apprenants') {
      this.users$ = this.apprenantService.getAllApprenants();
    } else if (form.choixFiltreUser === 'Formateurs') {
      this.users$ = this.formateurService.getAllFormateurs();
    } else if (form.choixFiltreUser === 'Tous les utilisateurs') {
      this.users$ = this.utilisateurService.getAllUsers();
    }
  }
  onSubmitNomPrenom(form) {
    this.submitted = true;
    if (form.query === 'nomPrenom-2') {
      this.searchNomPrenom(form);
    }
    if (form.query === 'nom-0') {
      this.searchNom(form);
    }
    if (form.query === 'prenom-1') {
      this.searchPrenom(form);
    }
  }
  searchNomPrenom(form) {
    if (form.search) {
      this.users$ = this.utilisateurService.getUserByNomPrenom(form.search);
    } else {
      this.users$ = this.utilisateurService.getAllUsers();
    }
  }
  searchNom(form) {
    if (form.search) {
      this.users$ = this.utilisateurService.getUserByNom(form.search);
    }
  }
  searchPrenom(form) {
    if (form.search) {
      this.users$ = this.utilisateurService.getUserByPrenom(form.search);
    }
  }
}
