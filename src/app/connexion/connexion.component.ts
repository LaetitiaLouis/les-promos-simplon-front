// @ts-ignore
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../service/auth.service';

// @ts-ignore
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  connexionForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,
              private auth: AuthService) { }

  /**
   * connexion d'un utilisateur avec son login et mdp
   * On défini les champs pseudo et mot de passe comme champs obligatoire
   */
  ngOnInit() {
    this.connexionForm = this.fb.group({
      pseudo: ['', Validators.required],
      motDePasse: ['', Validators.required]
    });
  }

  /**
   * On vérifi que le login et mdp correspond bien à un utilisatueur
   * @param form
   */
  onSubmit(form) {
    this.submitted = true;
    if (this.connexionForm.invalid) { return; }
    this.auth.login(form.pseudo, form.motDePasse);
  }

  get f() { return this.connexionForm.controls; }

}
