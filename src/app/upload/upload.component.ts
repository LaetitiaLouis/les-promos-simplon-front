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

  @Input() profile = true;
  photoFile: File;
  photoUrl: any;
  photoForm: FormGroup;
  categories = ['groupe', 'convivialité', 'travail'];

  constructor(private fb: FormBuilder,
              private photoService: PhotoService,
              private router: Router,
              private sanitizer: DomSanitizer) {
  }

  /**
   * Permet de choisir une photo et de l'ajouter sur le site
   * Copie cette photo dans le dossier uploads de l'utilisateur windows
   */
  ngOnInit() {
    this.photoForm = this.fb.group({
      nom: ['', !this.profile && Validators.required],
      categorie: ['', !this.profile &&  [Validators.required, Validators.maxLength(25)]]
    });
  }

  onFileSelected(files: FileList) {
    this.photoFile = files.item(0);
    const reader = new FileReader();
    reader.readAsDataURL(this.photoFile);
    reader.onload = (event: any) => this.photoUrl = this.sanitizer.bypassSecurityTrustStyle(`url(${event.target.result})`);
  }

  /**
   * Ajout de la photo si les champs sont remplis  lors du clic sur le boutton
   * @param form
   */
  onSubmit(form) {
    if (!this.photoFile || this.photoForm.invalid) {
      return;
    }
    const photo = new Photo();
    photo.nom = form.nom;
    photo.datePhoto = new Date();
    photo.categorie = this.profile ? 'profil' : form.categorie;
    const formData: FormData = new FormData();
    formData.append('file', this.photoFile, this.photoFile.name);
    this.photoService.savePhoto(photo, formData).subscribe(
      success => this.router.navigate(['/galerie'])
    );
  }
  get f() {
    return this.photoForm.controls;
  }
}
