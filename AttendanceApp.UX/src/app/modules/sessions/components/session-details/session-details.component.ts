import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SessionModel } from '../../mdoels/session.model';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent implements OnInit {

  id: number;
  currentSession: SessionModel;
  sessionDate: string;

  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService) {
      this.route.params.subscribe((params: Params) => {
        this.id = +params['id'];
        this.initForm();
      });
     }

  ngOnInit() {
  }

  private initForm() {

    this.sessionService.getSessionById(this.id).subscribe(session =>{
      this.currentSession = session;
      //this.sessionDate = session.sessionDate.
    });

  }
}
