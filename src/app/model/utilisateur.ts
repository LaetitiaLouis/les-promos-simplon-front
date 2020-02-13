import {Promo} from './promo';

export class Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  dateDeNaissance: Date;
  pseudo: string;
  motDePasse: string;
  commentaires: string;
  presentation: string;
  email: string;
  avatarUrl = 'http://localhost:8080/api/photos/download/avatar.png';
  role: object;
  photos: object[];
  hobbies: object[];
  isApprenant: boolean;
  entiteAffectation: string;
  promo: Promo;
  promos: Promo[];
}
