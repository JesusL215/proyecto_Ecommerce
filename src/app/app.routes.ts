import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductsPage } from './pages/productos/productos';
import { ProductDetailPage } from './pages/product-detail/product-detail';
import { OfertasComponent } from './pages/ofertas/ofertas';
import { Soporte } from './pages/soporte/soporte';
import { LoginPage } from './pages/login/login';
import { RegisterPage } from './pages/register/register';
import { TermsPage } from './pages/terms/terms';
import { PrivacyPage } from './pages/privacy/privacy';
import { ClaimsBookPage } from './pages/claims-book/claims-book';
import { AboutPage } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'productos', component: ProductsPage },
  { path: 'productos/:id', component: ProductDetailPage },
  { path: 'ofertas', component: OfertasComponent },
  { path: 'soporte', component: Soporte },
  { path: 'login', component: LoginPage },
  { path: 'registro', component: RegisterPage },
  { path: 'terminos', component: TermsPage },
  { path: 'privacidad', component: PrivacyPage },
  { path: 'libro-reclamaciones', component: ClaimsBookPage },
  { path: 'sobre-nosotros', component: AboutPage },

  { path: 'marcas/:marca', redirectTo: 'productos', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
