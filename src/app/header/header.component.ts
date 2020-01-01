import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'sw-header',
  animations: [fadeInAnimation],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: { '[@fadeInAnimation]': '' }
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
