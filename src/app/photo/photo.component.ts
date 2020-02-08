import { Component, OnInit } from '@angular/core';
import { Photo} from '../model/photo';
import {ActivatedRoute} from '@angular/router';
import {PhotoService} from '../service/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photos: Photo[];
  constructor(private photoService: PhotoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>
      this.photoService.getAllPhotos().subscribe(
        (photos: Photo[]) => this.photos = photos
      )
    );
  }

}
