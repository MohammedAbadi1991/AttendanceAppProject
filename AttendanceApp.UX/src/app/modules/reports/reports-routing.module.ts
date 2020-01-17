import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportMajorbylocationComponent } from './components/report-majorbylocation/report-majorbylocation.component';


const routes: Routes = [{ path: '', component: ReportMajorbylocationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
