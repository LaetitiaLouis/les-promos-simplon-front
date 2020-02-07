import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

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

  ngOnInit() {
    this.connexionForm = this.fb.group({
      pseudo: ['', Validators.required],
      motDePasse: ['', Validators.required]
    });
  }

  onSubmit(form) {
    this.submitted = true;
    if (this.connexionForm.invalid) { return; }
    this.auth.login(form.pseudo, form.motDePasse);
  }

  get f() { return this.connexionForm.controls; }

}
