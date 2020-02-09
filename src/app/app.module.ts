import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import {
  MatButtonModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
  MatSidenavModule,
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
  {path: 'profil', component: ProfilComponent}
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
    ProfilComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
