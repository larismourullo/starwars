import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'sw-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  starship: any;
  loading: boolean;
  category = 'starships';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getRandomStarship();
  }

  getRandomStarship() {
    this.loading = true;

    this.dataService.getPageData(this.category, 1).subscribe(data => {
      let starshipsPerPage = data['results'].length;
      let randomStarshipPosition = Math.floor(
        Math.random() * data['count'] + 1
      );
      let randomIndex = randomStarshipPosition - 1;
      let positionAtPage =
        randomIndex -
        (Math.ceil(randomStarshipPosition / starshipsPerPage) - 1) *
          starshipsPerPage;
      let randomStarshipPage = Math.ceil(
        randomStarshipPosition / starshipsPerPage
      );

      this.dataService
        .getPageData(this.category, randomStarshipPage)
        .subscribe(data => {
          this.starship = data['results'][positionAtPage];
          this.loading = false;
        });
    });
  }
}
