import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UtilisateurService} from './utilisateur.service';

/**
 * Interface obligatoire pour le retour des validateurs
 */
interface ValidationErrors {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  constructor(private userService: UtilisateurService) {
  }

  /**
   * Validateur d'unicité de pseudo
   */
  pseudoExists(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkIfPseudoExists(control.value).pipe(
        map(res => {
          return res ? {pseudoExists: true} : null;
        })
      );
    };
  }

  /**
   * Validateur d'unicité d'adresse mail
   */
  emailExists(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkIfEmailExists(control.value).pipe(
        map(res => {
          return res ? {emailExists: true} : null;
        })
      );
    };
  }

  /**
   * Validateur verifiant si deux mot de passe correspondent
   * @param control Le formulaire
   */
  passwordMatch(control: FormControl) {
    const password = control.get('motDePasse').value;
    const confirmPass = control.get('confirmPass').value;

    if (password !== confirmPass) {
      control.get('confirmPass').setErrors({passwordMismatch: true});
    }
  }

  /**
   * Demander au serveur si le pseudo existe
   * @param pseudo Le pseudo à vérifier
   */
  checkIfPseudoExists(pseudo: string) {
    return this.userService.checkIfPseudoExists(pseudo);
  }

  /**
   * Demander au serveur si l'adresse mail existe
   * @param email L'adresse à vérifier
   */
  private checkIfEmailExists(email: string) {
    return this.userService.checkIfEmailExists(email);
  }
}
