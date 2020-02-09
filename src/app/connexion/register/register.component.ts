import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormValidatorService} from '../../service/form-validator.service';
import {UtilisateurService} from '../../service/utilisateur.service';
import {Router} from '@angular/router';
import {Utilisateur} from '../../model/utilisateur';
import {Promo} from '../../model/promo';
import {PromoService} from '../../service/promo.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;
  entites = ['Paris', 'Nantes', 'Gradignan'];
  promos: Promo[];
  isApprenant = true;
  constructor(private fb: FormBuilder,
              private validator: FormValidatorService,
              private userService: UtilisateurService,
              private router: Router,
              private promoService: PromoService) {
  }

  ngOnInit() {
    this.promoService.getAll().subscribe(promos => this.promos = promos);
    this.registerForm = this.fb.group({
        isApprenant: [true, Validators.required],
        pseudo: ['', [Validators.required], [this.validator.pseudoExists()]],
        motDePasse: ['', [Validators.required, Validators.minLength(8)]],
        confirmPass: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email], [this.validator.emailExists()]],
        nom: ['', [Validators.required]],
        prenom: ['', [Validators.required]],
        presentation: ['', Validators.required],
        dateDeNaissance: [null, Validators.required],
        entiteAffectation: ['', Validators.required],
        avatarUrl: ['http://localhost:8080/api/photos/download/avatar.png'],
        promo: [null, Validators.required]
      },
      {
        validators: this.validator.passwordMatch
      });

  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if (this.f.invalid) { return; }
    console.log(this.registerForm.value);
    this.userService.registerUser(this.registerForm.value).subscribe(
      user => user && this.router.navigate(['/connexion'])
    );
  }

}
