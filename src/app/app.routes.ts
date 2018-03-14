import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { CategoriesComponent } from './categories/categories.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

export const AppRoutes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'categories', component: CategoriesComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);