import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

import ApexCharts from 'apexcharts'

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
