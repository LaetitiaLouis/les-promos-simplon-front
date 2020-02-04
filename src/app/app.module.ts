import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import {MatButtonModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import { GalerieComponent } from './galerie/galerie.component';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';

const routes: Routes =  [
  {path: '', component: AccueilComponent},
  {path: 'galerie', component: GalerieComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UtilisateurComponent,
    GalerieComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    ExtendedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
