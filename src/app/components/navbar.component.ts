import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
  <nav style="display: flex; justify-content: space-between;">
    <div>
      <a routerLinkActive="active" routerLink="/" [routerLinkActiveOptions]="{exact: true}">Home</a> |
      <a routerLinkActive="active" routerLink="/products">Products</a> |
      <a routerLinkActive="active" routerLink="/services">Services</a> |
      <a routerLinkActive="active" routerLink="/contact">Contact Us</a>
    </div>
    <div><a routerLinkActive="active" routerLink="/profile">My Account</a></div>
  </nav>`
})
export class NavbarComponent {

}
