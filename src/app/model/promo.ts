import {Utilisateur} from './utilisateur';

export class Promo {
  nom: string;
  specialite: string;
  anneeFin: string;
  apprenants: Utilisateur[];
  formateurs: Utilisateur[];
}
