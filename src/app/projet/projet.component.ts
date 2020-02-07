import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjetService} from '../projet.service';
import { Projet} from '../model/projet';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
veille: Projet[];
projets: Projet[];
  constructor(private projetService: ProjetService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.projetService.getAllProjets().subscribe((projets: Projet[]) => {
      this.veille = projets.filter(projet => projet.typeProjet === 'veille');
      this.projets = projets.filter(projet => projet.typeProjet === 'projet');
    });
  }

}
