import { ShellComponent } from './shell/shell.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PeopleComponent } from './people/people.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SpeciesComponent } from './species/species.component';
import { PlanetsComponent } from './planets/planets.component';

const children: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'planets', component: PlanetsComponent }
];

const AppRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'starwars'
  },
  {
    path: 'starwars',
    component: ShellComponent,
    children
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRouting {}
