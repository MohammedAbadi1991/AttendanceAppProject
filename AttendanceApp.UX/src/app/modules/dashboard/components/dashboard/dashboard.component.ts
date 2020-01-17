import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToOpenExistingSessions() {
    this.router.navigate(['/sessions']);
  }

  goToNewSession() {
    this.router.navigate(['/sessions/new-session']);
  }

  goToLocations() {
    this.router.navigate(['/locations']);
  }

  goToReports() {
    this.router.navigate(['/reports']);
  }
}
