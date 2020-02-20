import {Component, Input, OnInit} from '@angular/core';
import {PhotoService} from '../../service/photo.service';
import {Photo} from '../../model/photo';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  @Input() photos: Photo[];
  photoList;
  constructor(private photoService: PhotoService) { }

  /**
   * Si aucune photos fournis par le parent alors requete pour les obtenir
   */
  ngOnInit() {
    if (!this.photos) {
      this.photoService.getAllPhotos().subscribe(photosResult => this.photoList = photosResult);
    } else {
      this.photoList = this.photos;
    }

  }
}
