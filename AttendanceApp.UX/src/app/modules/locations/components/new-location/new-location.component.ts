import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from '../../services/locations.service';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { Subscription } from 'rxjs';
import { APIResponseModel } from 'src/app/shared/api/api-response';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.css']
})

export class NewLocationComponent implements OnInit, OnDestroy {

  form: FormGroup;
  subscribtion1: Subscription;
  subscribtion2: Subscription;
  subscribtion3: Subscription;

  constructor(private fb: FormBuilder, private router: Router, private service: LocationService, private snackBar: SnackbarService) {
    // To initialize FormGroup
    this.form = fb.group({
      LocationName: [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscribtion1) {
      this.subscribtion1.unsubscribe();
    }
    if (this.subscribtion2) {
      this.subscribtion2.unsubscribe();
    }
    if (this.subscribtion3) {
      this.subscribtion3.unsubscribe();
    }
  }

  onFormSubmit(form: NgForm) {

    this.subscribtion3 = this.service.addNewLocation(form.value.LocationName).subscribe(result => {

      if (result.statusCode === 200) {
        const subscription = this.snackBar.showInfo(result.message);
        this.subscribtion1 = subscription.onAction().subscribe(() => {
          this.router.navigate(['/locations']);
        });
        this.subscribtion2 = subscription.afterDismissed().subscribe(() => {
          this.router.navigate(['/locations']);
        });
      } else {
        this.snackBar.showError(result.message);
      }
    }, (error: APIResponseModel<any>) => {
      console.log(error.message);
    });

  }

}
