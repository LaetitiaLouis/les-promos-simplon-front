import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Photo} from '../model/photo';
import {PhotoService} from '../service/photo.service';
import {UtilisateurService} from '../service/utilisateur.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  photoFile: File;
  photoForm: FormGroup;
  isProfile = true;
  categories = ['groupe', 'évenement', 'restaurant', 'bar', 'travail'];

  constructor(private fb: FormBuilder,
              private photoService: PhotoService,
              private userService: UtilisateurService) {
  }

  ngOnInit() {
    this.photoForm = this.fb.group({
      nom: ['', Validators.required],
      categorie: ['', Validators.required]
    });
  }

  onFileSelected(files: FileList) {
    this.photoFile = files.item(0);
  }

  onSubmit() {
    const photo = new Photo();
    photo.nom = this.photoForm.get('nom').value;
    photo.categorie = this.isProfile ? 'profile' : this.photoForm.get('categorie').value;
    this.uploadPhotoInfos(photo);
  }

  uploadPhotoInfos(photo: Photo) {
    this.photoService.uploadPhotoInfos(photo).subscribe(
      photoResult => this.uploadPhotoFile(photoResult));
  }

  uploadPhotoFile(photo: Photo) {
    const formData: FormData = new FormData();
    formData.append('file', this.photoFile, this.photoFile.name);
    this.userService.getUserByPseudo(sessionStorage.getItem('pseudo')).subscribe(
      user => this.photoService.uploadPhotoFile(formData, photo.id, user.id, this.isProfile).subscribe(
        photoResult => console.log(photoResult)
      )
    );
  }
  get f() {
    return this.photoForm.controls;
  }
}
