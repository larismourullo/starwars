import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'sw-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  person: any;
  loading: boolean;
  category = 'people';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getRandomPerson();
  }

  getRandomPerson() {
    this.loading = true;

    this.dataService.getPageData(this.category, 1).subscribe(data => {
      let peoplePerPage = data['results'].length;
      let randonPersonPosition = Math.floor(Math.random() * data['count'] + 1);
      let randomIndex = randonPersonPosition - 1;
      let positionAtPage =
        randomIndex -
        (Math.ceil(randonPersonPosition / peoplePerPage) - 1) * peoplePerPage;
      let randomPersonPage = Math.ceil(randonPersonPosition / peoplePerPage);

      this.dataService
        .getPageData(this.category, randomPersonPage)
        .subscribe(data => {
          this.person = data['results'][positionAtPage];
          this.loading = false;
        });
    });
  }
}
