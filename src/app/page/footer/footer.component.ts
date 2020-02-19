import { Component, OnInit } from '@angular/core';
import {Promo} from '../../model/promo';
import {PromoService} from '../../service/promo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private promoService: PromoService) { }

  ngOnInit() {}

}
