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
   * on affiche toutes les photos par defaut
   */
  ngOnInit() {
    this.photos$ = this.photoService.getAllPhotos();
  }

  /**
   * recupère la liste des photos en fonction du filtre choisi
   */
  filterPhotos() {
    if (this.filter !== 'toutes') {
      this.photos$ = this.photoService.getPhotoByCategorie(this.filter);
    } else {
      this.photos$ = this.photoService.getAllPhotos();
    }
  }
}
