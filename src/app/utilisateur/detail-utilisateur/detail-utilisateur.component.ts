import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UtilisateurService} from '../../service/utilisateur.service';
import {Utilisateur} from '../../model/utilisateur';
import {Observable} from 'rxjs';
import {Projet} from '../../model/projet';
import {ProjetService} from '../../service/projet.service';


@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.css']
})
export class DetailUtilisateurComponent implements OnInit {
  user$: Observable<Utilisateur>;
  projets$: Observable<Projet[]>;
  constructor(private utilisateurService: UtilisateurService,
              private projetService: ProjetService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        const userId = +params.get('id');
        this.user$ = this.utilisateurService.getUserById(userId);
        this.projets$ = this.projetService.getByIdApprenant(userId);

      }
    );
  }
}
