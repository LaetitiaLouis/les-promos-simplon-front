import {Component, Input, OnInit} from '@angular/core';

import {Utilisateur} from '../../model/utilisateur';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  @Input() utilisateurs: Utilisateur[];
  constructor() { }
  ngOnInit() {
  }

}
