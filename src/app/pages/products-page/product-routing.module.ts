import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';
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
  path: ':detailurl',
  component: ProductDetailComponent,
  data: {title: 'Mediadesain - Product Detail'}
}];
