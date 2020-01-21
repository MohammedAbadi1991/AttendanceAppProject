import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from '../../services/locations.service';
import { MatSnackBar } from '@angular/material';
import { APIResponseModel } from 'src/app/shared/api/api-response';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.css']
})

export class NewLocationComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private service: LocationService, private snackBar: MatSnackBar) {
    // To initialize FormGroup
    this.form = fb.group({
      LocationName: [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {

    // console.log(form.value.LocationName);

    this.service.addNewLocation(form.value.LocationName).subscribe(() => {

      const subscriber = this.snackBar.open('New location created', 'Exit', {
        duration: 5000,
      });
      subscriber.onAction().subscribe(() => {
        this.router.navigate(['/locations']);
      });
      subscriber.afterDismissed().subscribe(() => {
        this.router.navigate(['/locations']);
      } );

    },(error:APIResponseModel<any>)=>{
      console.log("error has occured")
    });

  }

}
