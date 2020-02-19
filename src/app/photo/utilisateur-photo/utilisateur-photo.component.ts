import {Component, OnInit} from '@angular/core';
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
  isLoading = false;

  constructor(private photoService: PhotoService, private userService: UtilisateurService) {
  }

  /**
   * Récupérer le pseudo de l'utilisateur puis l'utilisateur grâce à ce pseudo
   */
  ngOnInit() {
    const pseudo = sessionStorage.getItem('pseudo');
    this.user$ = this.userService.getUserByPseudo(pseudo);
  }

  /**
   * Suppression d'une photo de l'utilisateur
   * @param id L'identifiant de la photo à supprimer
   */
  deletePhoto(id: number) {
    this.isLoading = true;
    this.photoService.deletePhoto(id).subscribe(
      result => {
        this.isLoading = false;
        location.reload();
      });
  }
}
