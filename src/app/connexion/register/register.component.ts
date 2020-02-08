import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormValidatorService} from '../../service/form-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;

  constructor(private fb: FormBuilder,
              private validator: FormValidatorService) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
        isApprenant: [true, Validators.required],
        pseudo: ['', [Validators.required], [this.validator.pseudoExists()]],
        motDePasse: ['', [Validators.required, Validators.minLength(8)]],
        confirmPass: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email], [this.validator.emailExists()]],
        nom: ['', [Validators.required]],
        prenom: ['', [Validators.required]],
        presentation: ['', Validators.required],
        dateDeNaissance: [null, Validators.required]
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
  }

}
