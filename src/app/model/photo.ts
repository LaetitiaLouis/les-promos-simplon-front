import {Utilisateur} from './utilisateur';

export class Photo {
id: number;
nom: string;
categorie: string;
datePhoto: Date;
imageUrl: string;
utilisateur: Utilisateur;
}
