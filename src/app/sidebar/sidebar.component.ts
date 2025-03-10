import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { Appointment } from '../model/apointment';
import { title } from 'process';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule], // Import RouterModule
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  Appointments: Appointment = {
    id: 1,
    title: 'new appointment',
    date: new Date('23.12.2025'),
  };
}
