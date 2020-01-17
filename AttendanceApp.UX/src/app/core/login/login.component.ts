import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  regiForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
     // To initialize FormGroup
     this.regiForm = fb.group({
      'UserName' : [null, Validators.required],
      'Password' : [null, Validators.required],
    });
   }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
    // console.log(form.value.UserName);
    // console.log(form.value.Password);

    this.authService.signinUser(form.value.UserName, form.value.Password);
    this.router.navigate(['/dashboard']);
  }

}
