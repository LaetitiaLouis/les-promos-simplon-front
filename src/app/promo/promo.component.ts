
import { Component, OnInit } from '@angular/core';
import {PromoService} from '../service/promo.service';
import {ActivatedRoute} from '@angular/router';
import {Promo} from '../model/promo';
import {Utilisateur} from '../model/utilisateur';
import {UtilisateurService} from '../service/utilisateur.service';
import {FormateurService} from '../service/formateur.service';
import {ApprenantService} from '../service/aprennant.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {
  promo$: Observable<Promo>;

  constructor(private promoService: PromoService,
              private route: ActivatedRoute) { }

  /**
   * On récupère le nom dans l'url et on récupère l'objet promo
   */
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        const nomPromo = params.get('nom');
        this.promo$ = this.promoService.findByNom(nomPromo);
      }
    );
  }
}
