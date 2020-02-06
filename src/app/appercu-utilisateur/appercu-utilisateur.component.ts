import {Component, Input, OnInit} from '@angular/core';
import {UtilisateurService} from '../utilisateur.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-appercu-utilisateur',
  templateUrl: './appercu-utilisateur.component.html',
  styleUrls: ['./appercu-utilisateur.component.css']
})
export class AppercuUtilisateurComponent implements OnInit {
  @Input() utilisateur;

  constructor(private utilisateurService: UtilisateurService,
              private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
