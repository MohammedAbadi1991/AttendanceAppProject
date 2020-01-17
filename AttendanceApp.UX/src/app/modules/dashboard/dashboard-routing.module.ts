import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes =
  [
    { path: '', component: DashboardComponent },
    {
      path: 'locations',
      loadChildren: '../locations/locations.module#LocationsModule'
    },
    {
      path: 'sessions',
      loadChildren: '../sessions/sessions.module#SessionsModule'
    },
    {
      path: 'reports',
      loadChildren: '../reports/reports.module#ReportsModule'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
