import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { GalerieComponent } from './galerie/galerie.component';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import { PromoComponent } from './promo/promo.component';
import { ProjetComponent } from './projet/projet.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DetailUtilisateurComponent } from './détail-utilisateur/detail-utilisateur.component';
import { AppercuUtilisateurComponent } from './appercu-utilisateur/appercu-utilisateur.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PageComponent } from './page/page.component';

const routes: Routes =  [
  {path: '', component: AccueilComponent},
  {path: 'utilisateur', component: UtilisateurComponent},
  {path: 'utilisateur/:id', component: DetailUtilisateurComponent},
  {path: 'promo/:specialite/:nom', component: PromoComponent},
  {path: 'projet', component: ProjetComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'galerie', component: GalerieComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UtilisateurComponent,
    GalerieComponent,
    AccueilComponent,
    PromoComponent,
    ProjetComponent,
    ConnexionComponent,
    RegisterComponent,
    ConnexionComponent,
    DetailUtilisateurComponent,
    AppercuUtilisateurComponent,
    RegisterComponent,
    PageComponent
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
