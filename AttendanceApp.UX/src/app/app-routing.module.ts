import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/auth/auth-guard.service';
import { LoginComponent } from './core/login/login.component';




const routes: Routes =
  [
    {
      path: '', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
      , canActivate: [AuthGuardService], runGuardsAndResolvers: 'always'
    },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
