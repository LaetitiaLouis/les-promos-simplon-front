import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Photo} from '../model/photo';
import {PhotoService} from '../service/photo.service';
import {UtilisateurService} from '../service/utilisateur.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @Input() profile = true;
  photoFile: File;
  photoUrl: any;
  photoForm: FormGroup;
  categories = ['groupe', 'convivialité', 'travail'];

  constructor(private fb: FormBuilder,
              private photoService: PhotoService,
              private userService: UtilisateurService,
              private router: Router) {
  }

  ngOnInit() {
    this.photoForm = this.fb.group({
      nom: ['', Validators.required],
      categorie: ['', Validators.required]
    });
  }

  onFileSelected(files: FileList) {
    this.photoFile = files.item(0);
    const reader = new FileReader();
    reader.readAsDataURL(this.photoFile);
    reader.onload = e => { this.photoUrl = reader.result; };
  }

  onSubmit(form) {
    if (!this.photoFile) { return; }
    if (!this.profile && this.photoForm.invalid) { return; }
    const photo = new Photo();
    photo.nom = form.nom;
    photo.datePhoto = new Date();
    photo.categorie = this.profile ? 'profil' : form.categorie;
    this.uploadPhotoInfos(photo);
  }

  uploadPhotoInfos(photo: Photo) {
    this.photoService.savePhotoInfos(photo).subscribe(
      photoResult => this.uploadPhotoFile(photoResult));
  }

  uploadPhotoFile(photo: Photo) {
    const returnUrl = this.profile ? '/utilisateur' :  '/galerie';
    const formData: FormData = new FormData();
    formData.append('file', this.photoFile, this.photoFile.name);
    this.userService.getUserByPseudo(sessionStorage.getItem('pseudo')).subscribe(
      user => this.photoService.uploadPhotoFile(formData, photo.id, user.id)
        .subscribe( result => this.router.navigate([`${returnUrl}`]))
      );
  }

  get f() {
    return this.photoForm.controls;
  }
}
