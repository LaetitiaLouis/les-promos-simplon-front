import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() text;
  @Input() photo;
  @Input() link;
  constructor(private router: Router,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
  showDetails() {
    this.router.navigate(this.link);
  }
  getTrustedUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }
}
