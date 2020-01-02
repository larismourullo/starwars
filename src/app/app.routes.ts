import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { CategoriesComponent } from './categories/categories.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PeopleComponent } from './people/people.component';

export const AppRoutes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'people', component: PeopleComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);