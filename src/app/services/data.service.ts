import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  url = 'https://swapi.co/api/';

  constructor(private http: HttpClient) { }

  getAllCategoryData(category) {
    return this.http.get(this.url + category).map(data => { return data;});
  }

  getCategoryDataById(category, number) {
    return this.http.get(this.url + category + "/" + number).map(data => { return data;});
  }

}