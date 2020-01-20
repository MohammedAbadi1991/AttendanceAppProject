import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionListComponent } from './components/session-list/session-list.component';
import { NewSessionComponent } from './components/new-session/new-session.component';
import { SessionDetailsComponent } from './components/session-details/session-details.component';


const routes: Routes = [
  { path: '', component: SessionListComponent},
  {
    path: 'new-session',
    component: NewSessionComponent
  },
  {
    path: 'session-details/:id',
    component: SessionDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
