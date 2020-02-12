import { Component, OnInit } from '@angular/core';
import {Promo} from '../model/promo';
import {PromoService} from '../service/promo.service';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
