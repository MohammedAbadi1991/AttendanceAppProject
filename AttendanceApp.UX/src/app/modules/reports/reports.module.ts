import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportMajorbylocationComponent } from './components/report-majorbylocation/report-majorbylocation.component';


@NgModule({
  declarations: [ReportMajorbylocationComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
