import { Component } from '@angular/core';
import { ServicesNavComponent } from './services-navbar.component';

@Component({
  selector: 'mds-services-a',
  standalone: true,
  imports: [ServicesNavComponent],
  template: `<br/>
  <mds-services-nav></mds-services-nav>
  <p>services-a works!</p>`
})
export class ServicesAComponent {

}
