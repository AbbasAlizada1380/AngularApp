import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule], // Import RouterModule
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  menuItems = [
    { label: 'Dashboard', icon: 'dashboard', link: '/dashboard' },
    { label: 'Orders', icon: 'shopping_cart', link: '/orders' },
    { label: 'Customers', icon: 'people', link: '/customers' },
    { label: 'Reports', icon: 'bar_chart', link: '/reports' },
    { label: 'Settings', icon: 'settings', link: '/settings' },
  ];
}
