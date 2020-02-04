import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import {MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import { GalerieComponent } from './galerie/galerie.component';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import { PromoComponent } from './promo/promo.component';
import { ProjetComponent } from './projet/projet.component';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes =  [
  {path: '', component: AccueilComponent},
  {path: 'utilisateur', component: UtilisateurComponent},
  {path: 'promo/:specialite/:nom', component: PromoComponent},
  {path: 'projet', component: ProjetComponent},
  {path: 'connexion', component: ConnexionComponent},
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
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    ExtendedModule,
    FlexModule,
    RouterModule.forRoot(routes),
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
