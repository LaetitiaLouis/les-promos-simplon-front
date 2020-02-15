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
  MatMenuModule, MatNativeDateModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule,
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
import { AffichagePhotoComponent } from './photo/affichage-photo/affichage-photo.component';
import { RetourComponent } from './retour/retour.component';
import { ProfilComponent } from './connexion/profil/profil.component';
import { UploadComponent } from './upload/upload.component';
import {CarrouselComponent} from './accueil/carrousel/carrousel.component';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import { UtilisateurPhotoComponent } from './photo/utilisateur-photo/utilisateur-photo.component';
import { CardComponent } from './card/card.component';
import { ErrorComponent } from './service/error/error.component';

const routes: Routes =  [
  {path: '', component: AccueilComponent},
  {path: 'utilisateur', component: UtilisateurComponent},
  {path: 'utilisateur/:id', component: DetailUtilisateurComponent},
  {path: 'promo/:specialite/:nom', component: PromoComponent},
  {path: 'projet', component: ProjetComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'galerie', component: PhotoComponent},
  {path: 'galerie/:id', component: AffichagePhotoComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'mes-photos', component: UtilisateurPhotoComponent}
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
    AffichagePhotoComponent,
    RetourComponent,
    ProfilComponent,
    UploadComponent,
    CarrouselComponent,
    UtilisateurPhotoComponent,
    CardComponent
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
    MatCarouselModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
