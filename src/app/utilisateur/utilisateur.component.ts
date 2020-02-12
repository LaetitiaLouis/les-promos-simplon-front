import {Component, Input, OnInit} from '@angular/core';
import {UtilisateurService} from '../service/utilisateur.service';
import {ActivatedRoute} from '@angular/router';
import {Utilisateur} from '../model/utilisateur';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {ApprenantService} from '../service/aprennant.service';
import {FormateurService} from '../service/formateur.service';

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
  @Input() utilisateurs: Utilisateur[];
  searchForm: FormGroup;
  submitted = false;
  choixUser: FormGroup;
  constructor(private fb: FormBuilder, private utilisateurService: UtilisateurService,
              private route: ActivatedRoute, private snackBar: MatSnackBar, private apprenantService: ApprenantService,
              private formateurService: FormateurService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['', Validators.required],
      query: ['prenom-1', Validators.required]
    });
    this.choixUser = this.fb.group({
      choixFiltreUser: ['Tous les utilisateurs', Validators.required]
    });
    this.route.paramMap.subscribe(params =>
      this.utilisateurService.getAllUsers().subscribe(
        (utilisateurs: Utilisateur[]) => this.utilisateurs = utilisateurs
      )
    );
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
        verticalPosition: 'top'
    });
  }

  affichageUtilisateur(form) {
    if (form.choixFiltreUser === 'Apprenants') {
      this.apprenantService.getAllApprenants().subscribe(
        (utilisateurs: Utilisateur[]) => this.utilisateurs = utilisateurs
      );
    } else {
      if (form.choixFiltreUser === 'Formateurs') {
        this.formateurService.getAllFormateurs().subscribe(
          (utilisateurs: Utilisateur[]) => this.utilisateurs = utilisateurs
        );
      } else {
        if (form.choixFiltreUser === 'Tous les utilisateurs') {
          this.utilisateurService.getAllUsers().subscribe(
            (utilisateurs: Utilisateur[]) => this.utilisateurs = utilisateurs
          );
        }
      }
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
      this.utilisateurService.getUserByNomPrenom(form.search).subscribe(
        (utilisateurs: Utilisateur[]) => this.utilisateurs = utilisateurs,
        error => { this.openSnackBar('Pas de résultats', 'Ok'), this.ngOnInit();
        }
      );
    } else {
      this.utilisateurService.getAllUsers().subscribe(
        (utilisateurs: Utilisateur[]) => this.utilisateurs = utilisateurs
      );
    }
  }
  searchNom(form) {
    if (form.search) {
      this.utilisateurService.getUserByNom(form.search).subscribe(
        (utilisateurs: Utilisateur[]) => this.utilisateurs = utilisateurs,
        error => { this.openSnackBar('Pas de résultats', 'Ok'), this.ngOnInit();
        }
      );
    }
  }
  searchPrenom(form) {
    if (form.search) {
      this.utilisateurService.getUserByPrenom(form.search).subscribe(
        (utilisateurs: Utilisateur[]) => this.utilisateurs = utilisateurs,
        error => { this.openSnackBar('Pas de résultats', 'Ok'), this.ngOnInit();
        }
      );
    }
  }
}
