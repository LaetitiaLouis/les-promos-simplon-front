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

  constructor(private photoService: PhotoService) { }


  ngOnInit() {
    if (!this.photos && !this.photos.length)
    this.photoService.getAllPhotos().subscribe(photosResult => this.photos = photosResult);
  }
}
