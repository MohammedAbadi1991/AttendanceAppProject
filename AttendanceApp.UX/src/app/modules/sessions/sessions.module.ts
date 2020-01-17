import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { SessionListComponent } from './components/session-list/session-list.component';
import { NewSessionComponent } from './components/new-session/new-session.component';
import { SessionDetailsComponent } from './components/session-details/session-details.component';


@NgModule({
  declarations: [SessionListComponent, NewSessionComponent, SessionDetailsComponent],
  imports: [
    CommonModule,
    SessionsRoutingModule
  ]
})
export class SessionsModule { }
