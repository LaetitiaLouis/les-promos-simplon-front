import { Component, OnInit } from '@angular/core';

import {PhotoService} from '../../service/photo.service';
import {UtilisateurService} from '../../service/utilisateur.service';
import {Observable} from 'rxjs';
import {Utilisateur} from '../../model/utilisateur';



@Component({
  selector: 'app-utilisateur-photo',
  templateUrl: './utilisateur-photo.component.html',
  styleUrls: ['./utilisateur-photo.component.css']
})
export class UtilisateurPhotoComponent implements OnInit {
  user$: Observable<Utilisateur>;

  constructor(private photoService: PhotoService, private userService: UtilisateurService) {
  }

  /**
   * Ce composant n'est appelé que depuis le profil d'un utilisateur.
   * On récupère le pseudo de l'utilisateur connecté et on récupère l'Id de cet utilisateur
   */
  ngOnInit() {
    const pseudo = sessionStorage.getItem('pseudo');
    this.user$ = this.userService.getUserByPseudo(pseudo);
  }

  /**
   * Suppression d'une photo de l'utilisateur
   * @param id
   */
  deletePhoto(id: number) {
    this.photoService.deletePhoto(id).subscribe(
      result => location.reload()
    );
  }
}
