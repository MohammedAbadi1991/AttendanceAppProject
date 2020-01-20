import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { SessionModel } from '../../mdoels/session.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  dataSource: SessionModel[];
  displayedColumns: string[] = ['id', 'sessionDate', 'location', 'openButton'];

  constructor(private service: SessionService, private router: Router) { }

  ngOnInit() {
    this.service.getAllSessions().subscribe(
      locations => {
        // console.log(locations);
        this.dataSource = locations;
      });
  }

  onOpenSession(sessionId: number) {
    // console.log('../../sessions/session-details/' + sessionId);
    this.router.navigate(['../../sessions/session-details/' + sessionId]);
  }

}
