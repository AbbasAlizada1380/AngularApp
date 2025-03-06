import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent], // Uncomment if using standalone components
  templateUrl: './app.component.html', // ✅ Correct usage
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
