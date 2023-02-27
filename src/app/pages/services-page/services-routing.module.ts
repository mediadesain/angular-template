import { Routes } from '@angular/router';
import { ServicesAComponent } from './services-a.component';
import { ServicesBComponent } from './services-b.component';
import { ServicesCComponent } from './services-c.component';

export const routes: Routes = [{
    path: '',
    redirectTo: 'service-a',
    pathMatch: 'full'
}, {
  path: 'service-a',
  component: ServicesAComponent,
  data: {title: 'Mediadesain - Service A'}
}, {
  path: 'service-b',
  component: ServicesBComponent,
  data: {title: 'Mediadesain - Service B'}
}, {
  path: 'service-c',
  component: ServicesCComponent,
  data: {title: 'Mediadesain - Service C'}
}];
