import { Component } from '@angular/core';
import { ServicesNavComponent } from './services-navbar.component';

@Component({
  selector: 'mds-services-c',
  standalone: true,
  imports: [ServicesNavComponent],
  template: `<br/>
  <mds-services-nav></mds-services-nav>
  <p>services-c works!</p>`
})
export class ServicesCComponent {
 
}
