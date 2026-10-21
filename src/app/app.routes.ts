import { Routes } from '@angular/router';
import { Catalog } from './catalog/catalog';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'catalog', component: Catalog },
  { path: '**', redirectTo: '' },
];
