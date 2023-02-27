import { Component } from '@angular/core';
import { ServicesNavComponent } from './services-navbar.component';

@Component({
  selector: 'app-services-a',
  standalone: true,
  imports: [ServicesNavComponent],
  template: `<br/>
  <app-services-nav></app-services-nav>
  <p>services-a works!</p>`
})
export class ServicesBComponent {

}
