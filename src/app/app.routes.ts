import { Routes } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: "dashboard", component: DashboardComponent},
    {path: "devices" ,component: DevicesComponent},
];
