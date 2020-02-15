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
  filter;
  categories = ['groupe', 'convivialité', 'travail'];
  constructor(private fb: FormBuilder, private photoService: PhotoService) {
  }

  ngOnInit() {
    this.photos$ = this.photoService.getAllPhotos();
  }

  filterPhotos() {
    if (this.filter !== 'toutes') {
      this.photos$ = this.photoService.getPhotoByCategorie(this.filter);
    } else {
      this.photos$ = this.photoService.getAllPhotos();
    }
  }
}
