import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'sw-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  vehicle: any;
  loading: boolean;
  category = 'vehicles';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getRandomVehicle();
  }

  getRandomVehicle() {
    this.loading = true;

    this.dataService.getPageData(this.category, 1).subscribe(data => {
      let vehiclesPerPage = data['results'].length;
      let randomVehiclePosition = Math.floor(Math.random() * data['count'] + 1);
      let randomIndex = randomVehiclePosition - 1;
      let positionAtPage =
        randomIndex -
        (Math.ceil(randomVehiclePosition / vehiclesPerPage) - 1) *
          vehiclesPerPage;
      let randomVehiclePage = Math.ceil(
        randomVehiclePosition / vehiclesPerPage
      );

      this.dataService
        .getPageData(this.category, randomVehiclePage)
        .subscribe(data => {
          this.vehicle = data['results'][positionAtPage];
          this.loading = false;
        });
    });
  }
}
