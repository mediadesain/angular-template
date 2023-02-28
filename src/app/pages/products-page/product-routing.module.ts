import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';
import { ProductNotfoundComponent } from './product-notfound.component';
import { ProductComponent } from './product.component';

export const routes: Routes = [
// {
//   path: '',
//   redirectTo: 'asd',
//   pathMatch: 'full'
// },
{
  path: '',
  component: ProductComponent,
  data: {title: 'Mediadesain - Products'}
}, {
  path: 'not-found',
  component: ProductNotfoundComponent,
  data: {title: 'Mediadesain - Products not found'}
}, {
  path: ':detailurl',
  component: ProductDetailComponent,
  data: {title: 'Mediadesain - Product Detail'}
}];
