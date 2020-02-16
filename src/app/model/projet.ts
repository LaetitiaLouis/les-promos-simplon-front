import {Utilisateur} from './utilisateur';
import {Hobby} from './hobby';

export class Projet {
  nom: string;
  descriptif: string;
  typeProjet: string;
  apprenants: Utilisateur[];
  langages: Hobby[];
}
