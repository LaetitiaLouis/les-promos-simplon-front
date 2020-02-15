import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() text;
  @Input() photo;
  @Input() link;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  showDetails() {
    this.router.navigate(this.link);
  }
}
