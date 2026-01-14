import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./component/inicio/inicio.component').then( m => m.InicioComponent)
  },
  {
    path: 'productos',
    loadComponent: () => import('./component/productos/productos.component').then( m => m.ProductosComponent)
  },
];