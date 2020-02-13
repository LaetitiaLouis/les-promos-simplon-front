import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Photo} from '../model/photo';
import {PhotoService} from '../service/photo.service';
import {UtilisateurService} from '../service/utilisateur.service';
import {Router} from '@angular/router';

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
  @Input() profile = true;
  categories = ['groupe', 'évenement', 'convivialité', 'travail'];

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
    reader.onload = e => { this.photoUrl = reader.result; }
  }

  onSubmit() {
    const photo = new Photo();
    photo.nom = this.photoForm.get('nom').value;
    photo.datePhoto = new Date();
    photo.categorie = this.profile ? 'profil' : this.photoForm.get('categorie').value;
    this.uploadPhotoInfos(photo);
  }

  uploadPhotoInfos(photo: Photo) {
    this.photoService.uploadPhotoInfos(photo).subscribe(
      photoResult => this.uploadPhotoFile(photoResult));
  }

  uploadPhotoFile(photo: Photo) {
    const returnUrl = this.profile ? '/utilisateur' :  '/galerie';
    const formData: FormData = new FormData();
    formData.append('file', this.photoFile, this.photoFile.name);
    this.userService.getUserByPseudo(sessionStorage.getItem('pseudo')).subscribe(
      user => this.photoService.uploadPhotoFile(formData, photo.id, user.id, this.profile).subscribe(
        photoResult => this.router.navigate([returnUrl])
      )
    );
  }
  get f() {
    return this.photoForm.controls;
  }
}
