import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'sw-categories',
  animations: [fadeInAnimation],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  host: { '[@fadeInAnimation]': '' }
})
export class CategoriesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
