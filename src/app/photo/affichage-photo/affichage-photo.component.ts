import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../service/photo.service';
import {ActivatedRoute} from '@angular/router';
import {Photo} from '../../model/photo';
import {Observable} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-affichage-photo',
  templateUrl: './affichage-photo.component.html',
  styleUrls: ['./affichage-photo.component.css']
})
export class AffichagePhotoComponent implements OnInit {
  photo$: Observable<Photo>;
  constructor(private photoService: PhotoService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer)  { }

  /**
   * Récuperer l'id de la photo dans l'url puis faire une requete au
   * serveur pour obtenir la photo
   */
  ngOnInit() {
    this.route.paramMap.subscribe(params =>
      this.photo$ = this.photoService.getPhotoById(+params.get('id'))
    );
  }

  /**
   * Permet d'utiliser l'url de la photo dans style.background-image sans erreur
   * @param url L'url de la photo
   */
  getTrustedUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }

}
