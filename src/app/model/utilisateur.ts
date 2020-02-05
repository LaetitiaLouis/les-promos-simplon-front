export class Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  dateDeNaissance: Date;
  pseudo: string;
  motDePasse: string;
  commentaires: string[];
  presentation: string;
  email: string;
  avatarUrl: string;
  role: object;
  photos: object[];
  hobbies: object[];

}
