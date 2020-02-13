import { Component, OnInit } from '@angular/core';
import {Photo} from '../../model/photo';
import {PhotoService} from '../../service/photo.service';
import {UtilisateurService} from '../../service/utilisateur.service';


@Component({
  selector: 'app-utilisateur-photo',
  templateUrl: './utilisateur-photo.component.html',
  styleUrls: ['./utilisateur-photo.component.css']
})
export class UtilisateurPhotoComponent implements OnInit {
  photos: Photo[];

  constructor(private photoService: PhotoService, private userService: UtilisateurService) {
  }

  ngOnInit() {
    const pseudo = sessionStorage.getItem('pseudo');
    this.userService.getUserByPseudo(pseudo).subscribe(user => {
      this.photoService.getPhotosByUser(user.id).subscribe(photos => this.photos = photos);
    });
  }
}
