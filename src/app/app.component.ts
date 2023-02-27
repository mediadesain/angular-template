import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer.component';
import { NavbarComponent } from './components/navbar.component';
import { DyamicTitlebarService } from './services/dynamic-titlebar.service';

@Component({
  selector: 'app-root',
  template: `
  <div style="max-width: 900px; margin: 0 auto;">
    <app-navbar></app-navbar>
      <div class="render-content"><router-outlet></router-outlet></div>
    <app-footer></app-footer>
  </div>`,
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  providers: [DyamicTitlebarService] // DyamicTitlebarService to create dynamic titlebar
})
export class AppComponent {
  constructor(private dynamictitle: DyamicTitlebarService){

  }
}
