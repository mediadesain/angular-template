import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsMocakupData } from './products-mockup';

@Component({
  selector: 'app-product',
  template: `<h3>{{data.name}}</h3>
  <img [src]="data.picture" width="200px"/>
  <pre>{{data|json}}</pre>`,
  standalone: true,
  imports: [JsonPipe]
})
export class ProductDetailComponent {
  data: any;
  constructor(
    private activerouter: ActivatedRoute,
    private router: Router
  ){
    this.activerouter.paramMap.subscribe( params => {
      let param = params.get('detailurl');
      if(param){
        this.data = ProductsMocakupData.data[param];
        if (!this.data) this.router.navigate(['products'])
      }
    });
  }
}
