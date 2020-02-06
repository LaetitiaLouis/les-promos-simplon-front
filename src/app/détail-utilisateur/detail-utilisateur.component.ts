import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UtilisateurService} from '../utilisateur.service';


@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.css']
})
export class DetailUtilisateurComponent implements OnInit {
  @Input() user;

  constructor(private utilisateurService: UtilisateurService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>
      this.utilisateurService.getUserById(this.user.id).subscribe(
        user => this.user = user
      )
    );
  }

}
