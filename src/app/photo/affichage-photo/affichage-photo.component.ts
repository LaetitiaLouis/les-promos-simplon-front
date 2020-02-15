import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../service/photo.service';
import {ActivatedRoute} from '@angular/router';
import {Photo} from '../../model/photo';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-affichage-photo',
  templateUrl: './affichage-photo.component.html',
  styleUrls: ['./affichage-photo.component.css']
})
export class AffichagePhotoComponent implements OnInit {
  photo$: Observable<Photo>;
  constructor(private photoService: PhotoService,
              private route: ActivatedRoute)  { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>
      this.photo$ = this.photoService.getPhotoById(+params.get('id'))
    );
  }

}
