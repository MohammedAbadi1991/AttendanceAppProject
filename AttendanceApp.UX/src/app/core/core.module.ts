import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from '../app-routing.module';
import { LoginService } from './services/login.service';
import { LoginComponent } from './login/login.component';
import { ApiService } from '../shared/api/api.service';
import { AttendanceappgraphsComponent } from './thirdparty/attendanceappgraphs/attendanceappgraphs.component';



@NgModule({
  declarations: [AttendanceappgraphsComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    AttendanceappgraphsComponent
  ],
  //You will provide here also login service.
  providers: [AuthService, AuthGuardService, LoginService, ApiService]
})
export class CoreModule { }
