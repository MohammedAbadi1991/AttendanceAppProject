import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { LocationModel } from 'src/app/modules/locations/models/location.model';
import { LocationService } from 'src/app/modules/locations/services/locations.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.css']
})
export class NewSessionComponent implements OnInit {

  form: FormGroup;
  allLocations: LocationModel[];

  constructor(
    private fb: FormBuilder, private router: Router, private service: SessionService,
    private locationService: LocationService, private snackBar: MatSnackBar) {

    // To initialize FormGroup
    this.form = fb.group({
      SessionDate: [null, Validators.required],
      LocationId: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.locationService.getAllLocations().subscribe(locations => {
      this.allLocations = locations;
      // console.log(locations);
    });
  }

  onFormSubmit(form: NgForm) {

    this.service.addNewSession(form.value.LocationId, form.value.SessionDate);
    this.router.navigate(['/sessions']);

    this.snackBar.open('New location created', '', {
      duration: 3000,
    });

  }


}
