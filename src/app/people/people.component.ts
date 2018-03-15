import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'sw-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  person: any;
  loading: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getPeople();
  }
  
  getPeople() {
    this.loading = true;
    this.dataService.getAllCategoryData('people')
      .subscribe(data => this.getPerson(data.count));
  }

  getPerson(num: number) {
    this.dataService.getCategoryDataById('people', 1)
      .subscribe(data => {this.person = data; this.loading = false;});
  }

}
