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
    // Récupération des promos pour le select du formaulaire
    this.promoService.getAll().subscribe(promos => this.promos = promos);

    // Créer les champs du fomulaires et leur associer des validateurs
    this.registerForm = this.fb.group({
        isApprenant: [true, Validators.required],
        pseudo: [{value: '', disabled: this.update}, [Validators.required], [this.validator.pseudoExists()]],
        motDePasse: [{value: '', disabled: this.update}, [Validators.required, Validators.minLength(8)]],
        confirmPass: [{value: '', disabled: this.update}, [Validators.required]],
        email: [{value: '', disabled: this.update}, [Validators.required, Validators.email], [this.validator.emailExists()]],
        nom: [{value: '', disabled: this.update}, [Validators.required]],
        prenom: [{value: '', disabled: this.update}, [Validators.required]],
        dateDeNaissance: [{value: null, disabled: this.update}, Validators.required],
        entiteAffectation: [{value: '', disabled: this.update}, Validators.required],
        promo: [{value: '', disabled: this.update}, Validators.required],
        avatarUrl: 'http://localhost:8080/api/photos/download/avatar.png'
      },
      {
        validators: this.validator.passwordMatch
      });
  }

  /**
   * Getter pour obtenir les control du formulaire
   */
  get f() {
    return this.registerForm.controls;
  }

  /**
   * Dans le cas d'une mise à jour de profil s'assurer que l'objet user est complet
   * avant de faire le put vers le serveur
   */
  updateUserObject() {
    Object.entries(this.registerForm.value).forEach(([key, value]) => {
      if (value) {
        this.user[key] = value;
      }
    });
  }

  /**
   * Soumission du formulaire:
   * - Définir si c'est un new ou un update
   * - Faire la requète correspondante
   */
  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
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
