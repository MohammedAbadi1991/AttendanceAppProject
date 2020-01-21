import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { LocationModel } from 'src/app/modules/locations/models/location.model';
import { LocationService } from 'src/app/modules/locations/services/locations.service';
import { Subscription } from 'rxjs';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { APIResponseModel } from 'src/app/shared/api/api-response';

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.css']
})
export class NewSessionComponent implements OnInit, OnDestroy {

  form: FormGroup;
  allLocations: LocationModel[];
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;

  constructor(
    private fb: FormBuilder, private router: Router, private service: SessionService,
    private locationService: LocationService, private snackBar: SnackbarService) {

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

  ngOnDestroy() {
    if (this.subscription1) {
      this.subscription1.unsubscribe();
    }
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
    if (this.subscription3) {
      this.subscription3.unsubscribe();
    }
  }

  onFormSubmit(form: NgForm) {

    if (form.value.LocationId <= 0) {
      form.controls['LocationId'].setErrors({ 'incorrect': true });
      return;
    }
    const selectedDate = new Date(form.value.SessionDate);
    const minAcceptableDate = new Date(2019, 0, 0, 0, 0, 0);

    if (selectedDate.getTime() <= minAcceptableDate.getTime()) {
      form.controls['SessionDate'].setErrors({ 'incorrect': true });
      return;
    }

    this.subscription3 = this.service.addNewSession(form.value.LocationId, form.value.SessionDate).subscribe(result => {
      if (result.statusCode === 200) {
        const subscription = this.snackBar.showInfo(result.message);
        this.subscription1 = subscription.onAction().subscribe(() => {
          this.router.navigate(['/sessions']);
        });
        this.subscription2 = subscription.afterDismissed().subscribe(() => {
          this.router.navigate(['/sessions']);
        });
      } else {
        this.snackBar.showError(result.message);
      }
    }, (error: APIResponseModel<any>) => {
      console.log(error.message);
    });
  }
}
