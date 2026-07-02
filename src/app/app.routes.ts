import { Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio';

import { ProductosComponent } from './pages/productos/productos';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
