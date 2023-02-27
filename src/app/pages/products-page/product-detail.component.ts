import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel, ProductsMocakupData } from './products-mockup';

@Component({
  selector: 'mds-product',
  template: `<h3>{{data?.name}}</h3>
  <img [src]="data?.picture" width="200px"/>
  <pre>{{data|json}}</pre>`,
  standalone: true,
  imports: [JsonPipe]
})
export class ProductDetailComponent {
  data?: ProductModel;
  constructor(
    private activerouter: ActivatedRoute,
    private router: Router
  ){
    this.activerouter.paramMap.subscribe( params => {
      const param = params.get('detailurl');
      if(param){
        this.data = ProductsMocakupData.data[param];
        if (!this.data) this.router.navigate(['products'])
      }
    });
  }
}
