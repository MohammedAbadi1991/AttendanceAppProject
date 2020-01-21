import { Component, OnInit, OnDestroy } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { SessionModel } from '../../mdoels/session.model';
import { Subscription } from 'rxjs';
import { APIResponseModel } from 'src/app/shared/api/api-response';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnDestroy {

  dataSource: SessionModel[];
  displayedColumns: string[] = ['id', 'sessionDate', 'location', 'openButton'];

  subscription1: Subscription;

  constructor(private service: SessionService, private router: Router) { }

  ngOnInit() {
    this.subscription1 = this.service.getAllSessions().subscribe(
      locations => {
        // console.log(locations);
        this.dataSource = locations;
      }, (error: APIResponseModel<any>) => {
        console.log(error.message);
      });
  }

  ngOnDestroy() {
    if (this.subscription1) {
      this.subscription1.unsubscribe();
    }
  }

  onOpenSession(sessionId: number) {
    this.router.navigate(['../../sessions/session-details/' + sessionId]);
  }

}
