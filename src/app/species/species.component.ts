import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'sw-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  specie: any;
  loading: boolean;
  category = 'species';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getRandomSpecie();
  }

  getRandomSpecie() {
    this.loading = true;

    this.dataService.getPageData(this.category, 1).subscribe(data => {
      let speciesPerPage = data['results'].length;
      let randomSpeciePosition = Math.floor(Math.random() * data['count'] + 1);
      let randomIndex = randomSpeciePosition - 1;
      let positionAtPage =
        randomIndex -
        (Math.ceil(randomSpeciePosition / speciesPerPage) - 1) * speciesPerPage;
      let randomSpeciePage = Math.ceil(randomSpeciePosition / speciesPerPage);

      this.dataService
        .getPageData(this.category, randomSpeciePage)
        .subscribe(data => {
          this.specie = data['results'][positionAtPage];
          this.loading = false;
        });
    });
  }
}
