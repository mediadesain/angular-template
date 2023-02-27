import { KeyValuePipe, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductModelList, ProductsMocakupData } from './products-mockup';

@Component({
  selector: 'app-product',
  template: `<div style="display: flex; flex-direction: row; flex-wrap: wrap; margin-top: 1em">
    <div *ngFor="let item of data | keyvalue" style="width: 33.33%; margin-bottom: 1.5em; text-align: center">
      <!-- {{item.key}} -->
      <img [src]="item.value.picture" style="width: 100px; display: block; margin: 0 auto"/>
      {{item.value.name}} - <i [ngStyle]="{'color': item.value.gender === 'women' ? 'red' : 'blue'}" style="opacity: 0.4">{{item.value.gender}}</i><br/>
      <a [routerLink]="'/products/'+item.value.id">detail →</a>
    </div>
  </div>`,
  standalone: true,
  imports: [RouterLink, NgFor, NgStyle, KeyValuePipe]
})
export class ProductComponent {
  data: ProductModelList;
  constructor(){
    this.data = ProductsMocakupData.data;
  }
}
