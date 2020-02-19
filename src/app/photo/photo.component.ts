import { Component, OnInit } from '@angular/core';
import { Photo} from '../model/photo';
import {PhotoService} from '../service/photo.service';
import {FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photos$: Observable<Photo[]>;
  filter = 'toutes';
  categories = ['groupe', 'convivialité', 'travail'];
  constructor(private fb: FormBuilder, private photoService: PhotoService) {
  }

  /**
   * Obtenir la liste des photos du serveur
   */
  ngOnInit() {
    this.photos$ = this.photoService.getAllPhotos();
  }

  /**
   * Obtenir la liste correspondant au filtre choisi
   */
  filterPhotos() {
    if (this.filter !== 'toutes') {
      this.photos$ = this.photoService.getPhotoByCategorie(this.filter);
    } else {
      this.photos$ = this.photoService.getAllPhotos();
    }
  }
}
