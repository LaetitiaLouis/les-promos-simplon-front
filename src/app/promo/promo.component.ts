
import { Component, OnInit } from '@angular/core';
import {PromoService} from '../promo.service';
import {ActivatedRoute} from '@angular/router';
import {Promo} from '../model/promo';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {
  promo: Promo;
  constructor(private promoService: PromoService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>
      this.promoService.findByNom(params.get('nom')).subscribe(
        promo => this.promo = promo
      )
    );
  }

}
