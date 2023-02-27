import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/404.component';
import { ContactComponent } from './pages/contact-page/contact.component';
import { HomeComponent } from './pages/home-page/home.component';
import { MyProfileComponent } from './pages/myprofile-page/myprofile-page.component';

export const routes: Routes = [{
  path: '',
  component: HomeComponent,
  data: {title: 'Mediadesain - Home'} // Dynamic Titlebar with dynamic-titebar.service.ts
}, {
  path: 'products',
  loadChildren: () => import('./pages/products-page/product-routing.module').then(m => m.routes)
}, {
  path: 'services',
  loadChildren: () => import('./pages/services-page/services-routing.module').then(m => m.routes)
}, {
  path: 'contact',
  component: ContactComponent,
  data: {title: 'Mediadesain - Contact'}
}, {
  path: 'profile',
  component: MyProfileComponent,
  data: {title: 'Mediadesain - Profile'}
}, {
  path: '**',
  component: PageNotFoundComponent,
  data: {title: 'Page Not Found'}
}];
