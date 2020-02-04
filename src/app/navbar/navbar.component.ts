import { Component, OnInit } from '@angular/core';
import {PromoService} from '../promo.service';
import {Promo} from '../model/promo';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  web: Promo[];
  cyber: Promo[];
  constructor(private promoService: PromoService) { }

  ngOnInit() {
    this.promoService.getAll().subscribe(promos => {
      this.web = promos.filter(promo => promo.specialite === 'webdev');
      this.cyber = promos.filter(promo => promo.specialite === 'cybersecu');
    });
  }

}
