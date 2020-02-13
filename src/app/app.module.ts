import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './page/navbar/navbar.component';
import { FooterComponent } from './page/footer/footer.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import {
    MatButtonModule, MatDatepickerModule, MatExpansionModule,
    MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatListModule,
    MatMenuModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSidenavModule, MatSnackBarModule,
    MatToolbarModule
} from '@angular/material';
import { PhotoComponent } from './photo/photo.component';
import {ExtendedModule, FlexModule, GridModule} from '@angular/flex-layout';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import { PromoComponent } from './promo/promo.component';
import { ProjetComponent } from './projet/projet.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DetailUtilisateurComponent } from './utilisateur/detail-utilisateur/detail-utilisateur.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './connexion/register/register.component';
import { PageComponent } from './page/page.component';
import { AppercuPhotoComponent } from './photo/appercu-photo/appercu-photo.component';
import { AffichagePhotoComponent } from './photo/affichage-photo/affichage-photo.component';
import { RetourComponent } from './retour/retour.component';
import { ListUtilisateurComponent } from './utilisateur/list-utilisateur/list-utilisateur.component';
import { ProfilComponent } from './connexion/profil/profil.component';
import { UploadComponent } from './upload/upload.component';
import { RechercheComponent } from './utilisateur/recherche/recherche.component';
import {CarrouselComponent} from './accueil/carrousel/carrousel.component';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import { SupprimerPhotoComponent } from './photo/supprimer-photo/supprimer-photo.component';
import { UtilisateurPhotoComponent } from './photo/utilisateur-photo/utilisateur-photo.component';


const routes: Routes =  [
  {path: '', component: AccueilComponent},
  {path: 'utilisateur', component: UtilisateurComponent},
  {path: 'utilisateur/:id', component: DetailUtilisateurComponent},
  {path: 'utilisateur/:nomPrenom', component: RechercheComponent},
  {path: 'promo/:specialite/:nom', component: PromoComponent},
  {path: 'projet', component: ProjetComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'galerie', component: PhotoComponent},
  {path: 'galerie/:id', component: AffichagePhotoComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'galerie/:profil', component: UtilisateurPhotoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UtilisateurComponent,
    PhotoComponent,
    AccueilComponent,
    PromoComponent,
    ProjetComponent,
    ConnexionComponent,
    RegisterComponent,
    ConnexionComponent,
    DetailUtilisateurComponent,
    RegisterComponent,
    PageComponent,
    AppercuPhotoComponent,
    AffichagePhotoComponent,
    RetourComponent,
    ListUtilisateurComponent,
    ProfilComponent,
    UploadComponent,
    RechercheComponent,
    CarrouselComponent,
    SupprimerPhotoComponent,
    UtilisateurPhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    ExtendedModule,
    FlexModule,
    RouterModule.forRoot(routes),
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    GridModule,
    MatSelectModule,
    FormsModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
