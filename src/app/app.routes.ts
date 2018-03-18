import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { CategoriesComponent } from './categories/categories.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PeopleComponent } from './people/people.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SpeciesComponent } from './species/species.component';
import { PlanetsComponent } from './planets/planets.component';

export const AppRoutes: Routes = [
  { path: 'starwars', component: HeaderComponent },
  { path: 'starwars/categories', component: CategoriesComponent },
  { path: 'starwars/people', component: PeopleComponent },
  { path: 'starwars/starships', component: StarshipsComponent },
  { path: 'starwars/vehicles', component: VehiclesComponent },
  { path: 'starwars/species', component: SpeciesComponent },
  { path: 'starwars/planets', component: PlanetsComponent },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);