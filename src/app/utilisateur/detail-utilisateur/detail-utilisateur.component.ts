import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UtilisateurService} from '../../service/utilisateur.service';
import {Utilisateur} from '../../model/utilisateur';


@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.css']
})
export class DetailUtilisateurComponent implements OnInit {
  user: Utilisateur;

  constructor(private utilisateurService: UtilisateurService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>
      this.utilisateurService.getUserById(+params.get('id')).subscribe(
        (user: Utilisateur) => this.user = user
      )
    );
  }

}
