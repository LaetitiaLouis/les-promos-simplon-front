import { Component, OnInit } from '@angular/core';
import {PromoService} from '../service/promo.service';
import {Promo} from '../model/promo';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  web: Promo[];
  cyber: Promo[];
  constructor(private promoService: PromoService,
              private auth: AuthService) { }

  ngOnInit() {
    this.promoService.getAll().subscribe(promos => {
      this.web = promos.filter(promo => promo.specialite === 'webdev');
      this.cyber = promos.filter(promo => promo.specialite === 'cybersecu');
    });
  }

}
