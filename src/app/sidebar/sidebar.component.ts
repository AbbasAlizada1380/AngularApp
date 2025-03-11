import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for basic directives
import { RouterModule } from '@angular/router'; // RouterModule is needed for routing
import { Appointment } from '../model/apointment';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule], // CommonModule is needed for *ngFor to work
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  apointments: Appointment[] = [
    { id: 1, title: 'new appointment', date: new Date('2025-12-23') },
    { id: 2, title: 'new appointment2', date: new Date('2025-12-24') },
  ];
}
