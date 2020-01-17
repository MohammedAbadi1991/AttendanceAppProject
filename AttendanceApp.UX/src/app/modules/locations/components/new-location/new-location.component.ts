import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from '../../locations.service';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.css']
})

export class NewLocationComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private service: LocationService) {
     // To initialize FormGroup
     this.form = fb.group({
      LocationName : [null, Validators.required],
    });
   }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {

    // this.authService.signinUser(form.value.UserName, form.value.Password);
    this.service.addNewLocation(form.value.LocationName);
    // console.log(form.value.LocationName);
    this.router.navigate(['/locations']);
  }

}
