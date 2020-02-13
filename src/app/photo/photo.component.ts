import { Component, OnInit } from '@angular/core';
import { Photo} from '../model/photo';
import {ActivatedRoute} from '@angular/router';
import {PhotoService} from '../service/photo.service';
import {FormBuilder, FormGroup, Validators,} from '@angular/forms';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photos: Photo[];
  choixForm: FormGroup;

  constructor(private fb: FormBuilder, private photoService: PhotoService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.choixForm = this.fb.group({
      choix: ['Toutes les photos', Validators.required]
    });
    this.photoService.getAllPhotos().subscribe(
      (photos: Photo[]) => this.photos = photos
    );
  }

    affichagePhoto(form) {
    if (form.choix === 'Toutes les photos') {
      this.photoService.getAllPhotos().subscribe(
        (photos: Photo[]) => this.photos = photos
      );
    } else {
      if (form.choix === 'Evenements') {
        this.photoService.getPhotoByCategorie('évenement').subscribe(
          (photos: Photo[]) => this.photos = photos
        );
      } else {
        if (form.choix === 'Profils') {
          this.photoService.getPhotoByCategorie('profil').subscribe(
            (photos: Photo[]) => this.photos = photos
          );
        } else {
          if (form.choix === 'Groupe') {
            this.photoService.getPhotoByCategorie('groupe').subscribe(
              (photos: Photo[]) => this.photos = photos
            );
          } else {
            if (form.choix === 'Travail') {
              this.photoService.getPhotoByCategorie('travail').subscribe(
                (photos: Photo[]) => this.photos = photos
              );
            }
          }
        }
      }
    }
  }
}
