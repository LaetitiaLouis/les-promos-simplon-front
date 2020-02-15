import {Utilisateur} from './utilisateur';

export class Projet {
  nom: string;
  descriptif: string;
  typeProjet: string;
  apprenants: Utilisateur[];
}
