import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UtilisateurService} from './utilisateur.service';

interface ValidationErrors {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  constructor(private userService: UtilisateurService) {
  }

  pseudoExists(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkIfPseudoExists(control.value).pipe(
        map(res => {
          return res ? {pseudoExists: true} : null;
        })
      );
    };
  }

  emailExists(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkIfEmailExists(control.value).pipe(
        map(res => {
          return res ? {emailExists: true} : null;
        })
      );
    };
  }

  passwordMatch(control: FormControl) {
    const password = control.get('motDePasse').value;
    const confirmPass = control.get('confirmPass').value;

    if (password !== confirmPass) {
      control.get('confirmPass').setErrors({passwordMismatch: true});
    }
  }

  checkIfPseudoExists(pseudo: string) {
    return this.userService.checkIfPseudoExists(pseudo);
  }

  private checkIfEmailExists(email: string) {
    return this.userService.checkIfEmailExists(email);
  }
}
