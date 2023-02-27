import { Component } from '@angular/core';
import { ServicesNavComponent } from './services-navbar.component';

@Component({
  selector: 'app-services-c',
  standalone: true,
  imports: [ServicesNavComponent],
  template: `<br/>
  <app-services-nav></app-services-nav>
  <p>services-c works!</p>`
})
export class ServicesCComponent {
 
}
