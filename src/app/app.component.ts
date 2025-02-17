import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent], // Import the standalone component
  template: ` <app-navbar ngSkipHydration></app-navbar> `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
