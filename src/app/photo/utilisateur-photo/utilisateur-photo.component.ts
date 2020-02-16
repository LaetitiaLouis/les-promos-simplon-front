import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../service/photo.service';
import {UtilisateurService} from '../../service/utilisateur.service';
import {Observable} from 'rxjs';
import {Utilisateur} from '../../model/utilisateur';
import {Photo} from '../../model/photo';


@Component({
  selector: 'app-utilisateur-photo',
  templateUrl: './utilisateur-photo.component.html',
  styleUrls: ['./utilisateur-photo.component.css']
})
export class UtilisateurPhotoComponent implements OnInit {
  user$: Observable<Utilisateur>;

  constructor(private photoService: PhotoService, private userService: UtilisateurService) {
  }

  ngOnInit() {
    const pseudo = sessionStorage.getItem('pseudo');
    this.user$ = this.userService.getUserByPseudo(pseudo);
  }
  deletePhoto(id: number) {
    this.photoService.deletePhoto(id).subscribe(
      result => location.reload()
    );
  }
}
