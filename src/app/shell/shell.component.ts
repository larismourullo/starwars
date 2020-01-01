import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-shell',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ShellComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
