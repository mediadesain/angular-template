import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel, ProductsMocakupData } from './products-mockup';

@Component({
  selector: 'mds-not-product',
  template: `<p>product not found</p>`,
  standalone: true,
  imports: [JsonPipe]
})
export class ProductNotfoundComponent {}
