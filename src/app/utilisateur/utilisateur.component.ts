
import {Component, Input, OnInit} from '@angular/core';
import {UtilisateurService} from '../service/utilisateur.service';
import {ActivatedRoute} from '@angular/router';
import {Utilisateur} from '../model/utilisateur';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  @Input() utilisateurs: Utilisateur[];
  searchForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private utilisateurService: UtilisateurService,
              private route: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['', Validators.required]
    });
    this.route.paramMap.subscribe(params =>
      this.utilisateurService.getAllUsers().subscribe(
        (utilisateurs: Utilisateur[]) => this.utilisateurs = utilisateurs
      )
    );
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 10000,
    });
  }
  onSubmitNomPrenom(form) {
    this.submitted = true;
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
}
