import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services-nav',
  standalone: true,
  imports: [RouterModule],
  template: `
    <a routerLinkActive="active" routerLink="/services/service-a">Service A</a> |
    <a routerLinkActive="active" routerLink="/services/service-b">Service B</a> |
    <a routerLinkActive="active" routerLink="/services/service-c">Service C</a> 
  `
})
export class ServicesNavComponent {

}
