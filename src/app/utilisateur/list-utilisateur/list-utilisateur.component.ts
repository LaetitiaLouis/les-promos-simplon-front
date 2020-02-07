import {Component, Input, OnInit} from '@angular/core';
import {Utilisateur} from '../../model/utilisateur';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.css']
})
export class ListUtilisateurComponent implements OnInit {
  @Input() utilisateurs: Utilisateur[];
  constructor() { }

  ngOnInit() {
  }

}
