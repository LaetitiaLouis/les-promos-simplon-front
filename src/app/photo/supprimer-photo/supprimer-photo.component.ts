import { Component, OnInit } from '@angular/core';
import {Photo} from '../../model/photo';
import {PhotoService} from '../../service/photo.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-supprimer-photo',
  templateUrl: './supprimer-photo.component.html',
  styleUrls: ['./supprimer-photo.component.css']
})
export class SupprimerPhotoComponent implements OnInit {

  constructor(private photoService: PhotoService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

deletePhoto() {
    this.photoService.deletePhoto(1).subscribe(message => console.log(message));
  }

}
