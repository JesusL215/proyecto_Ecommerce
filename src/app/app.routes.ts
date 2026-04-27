import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { 
    path: 'productos', 
    loadComponent: () => import('./pages/product-page/product-page.component').then(m => m.ProductPageComponent) 
  },
  { 
    path: 'ofertas', 
    loadComponent: () => import('./pages/ofertas-page/ofertas-page.component').then(m => m.OfertasPageComponent) 
  },
  { 
    path: 'sobre-nosotros', 
    loadComponent: () => import('./pages/sobre-nosotros-page/sobre-nosotros-page.component').then(m => m.SobreNosotrosPageComponent) 
  },
  { path: '**', redirectTo: '' }
];
