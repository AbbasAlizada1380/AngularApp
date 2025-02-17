import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen = false; // Track menu state

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Toggle menu state
  }
}
