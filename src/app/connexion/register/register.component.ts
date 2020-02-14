import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormValidatorService} from '../../service/form-validator.service';
import {UtilisateurService} from '../../service/utilisateur.service';
import {Router} from '@angular/router';
import {Promo} from '../../model/promo';
import {PromoService} from '../../service/promo.service';
import {Utilisateur} from '../../model/utilisateur';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() update = false;
  @Input() user: Utilisateur;
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
        pseudo: [{value: '', disabled: this.update} , [Validators.required], [this.validator.pseudoExists()]],
        motDePasse: [{value: '', disabled: this.update}, [Validators.required, Validators.minLength(8)]],
        confirmPass: [{value: '', disabled: this.update}, [Validators.required]],
        email: [{value: '', disabled: this.update}, [Validators.required, Validators.email], [this.validator.emailExists()]],
        nom: [{value: '', disabled: this.update}, [Validators.required]],
        prenom: [{value: '', disabled: this.update}, [Validators.required]],
        presentation: [{value: '', disabled: this.update}, Validators.required],
        dateDeNaissance: [{value: null, disabled: this.update}, Validators.required],
        entiteAffectation: [{value: '', disabled: this.update}, Validators.required],
        promo: [{value: null, disabled: this.update}, Validators.required]
      },
      {
        validators: this.validator.passwordMatch
      });

  }

  get f() {
    return this.registerForm.controls;
  }

  updateUserObject() {
    Object.entries(this.registerForm.value).forEach(([key, value]) => {
      if (value) {
        this.user[key] = value;
      }
    });
  }

  onSubmit() {
    if (this.f.invalid) { return; }
    if (this.update) {
      this.updateUserObject();
      this.userService.updateUser(this.user).subscribe(
        user => console.log(user)
      );
    } else {
      this.userService.registerUser(this.registerForm.value).subscribe(
        user => user && this.router.navigate(['/connexion'])
      );
    }

  }

}
