import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Photo} from '../model/photo';
import {PhotoService} from '../service/photo.service';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @Input() profile;
  photoFile: File;
  photoUrl: any;
  photoForm: FormGroup;
  isLoading = false;
  categories = ['groupe', 'convivialité', 'travail'];

  constructor(private fb: FormBuilder,
              private photoService: PhotoService,
              private router: Router,
              private sanitizer: DomSanitizer) {
  }

  /**
   * Création du formulaire d'upload
   */
  ngOnInit() {
    this.photoForm = this.fb.group({
      nom: ['', !this.profile && Validators.required],
      categorie: ['', !this.profile &&  [Validators.required, Validators.maxLength(25)]]
    });
  }

  /**
   * Un fichier est séléctionné par l'utilisateur:
   * - Assigner le fichier à la variable photoFile
   * - Assigner son url à la variable photoUrl pour prévisualiser l'image
   * @param files La liste des fichier de l'input
   */
  onFileSelected(files: FileList) {
    this.photoFile = files.item(0);
    const reader = new FileReader();
    reader.readAsDataURL(this.photoFile);
    reader.onload = (event: any) => this.photoUrl = this.sanitizer.bypassSecurityTrustStyle(`url(${event.target.result})`);
  }

  /**
   * Si le formulaire est valide et le fichier photo existe:
   * - Création d'un objet photo complet
   * - Requète afin d'uploader la photo
   */
  onSubmit(form) {
    if (!this.photoFile || this.photoForm.invalid) {
      return;
    }
    this.isLoading = true;
    const photo = new Photo();
    photo.nom = form.nom;
    photo.datePhoto = new Date();
    photo.categorie = this.profile ? 'profil' : form.categorie;
    const formData: FormData = new FormData();
    formData.append('file', this.photoFile, this.photoFile.name);
    this.photoService.savePhoto(photo, formData).subscribe(
      success => {
        this.isLoading = false;

        location.reload();
    },
        error => this.isLoading = false
    );
  }

  /**
   * Getter pour obtenir les controls du formulaire
   */
  get f() {
    return this.photoForm.controls;
  }
}
