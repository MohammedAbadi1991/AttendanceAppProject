import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SessionModel } from '../../mdoels/session.model';
import { SessionService } from '../../services/session.service';
import { Subscription, Subject } from 'rxjs';
import { APIResponseModel } from 'src/app/shared/api/api-response';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { LocationModel } from 'src/app/modules/locations/models/location.model';
import { LocationService } from 'src/app/modules/locations/services/locations.service';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { StudentModel } from '../../mdoels/student.model';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent implements OnInit, OnDestroy {

  id: number;
  currentSession: SessionModel;
  sessionDate: string;

  subscription1: Subscription;
  subscription2: Subscription;

  formRegister: FormGroup;
  formSearch: FormGroup;
  allLocations: LocationModel[];
  allMajors: string[];
  studentSubject = new Subject<StudentModel>();
  currentStudent: StudentModel;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private locationService: LocationService,
    private snackBar: SnackbarService) {

    this.studentSubject.subscribe(student => {
      this.currentStudent = student;
      debugger;
      // this.formRegister.value.major = student.major;
    });

    this.subscription1 = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.initForm();
    });

    // To initialize FormGroup
    this.formSearch = fb.group({
      PhoneForSearch: [null]
    });

    this.formRegister = fb.group({
      Name: [null, Validators.required],
      PhoneNumber: [null, Validators.required],
      Age: [null],
      BloodType: [null],
      Major: [null, Validators.required],
      Email: [null, Validators.required],
      TownId: [null, Validators.required],
    });

    this.allMajors = ['Computer Science', 'Philosophy', 'Mathematics', 'Engineering', 'Biology', 'Chimestry'];

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
  }

  private initForm() {

    this.subscription2 = this.sessionService.getSessionById(this.id).subscribe(session => {
      this.currentSession = session;
    }, (error: APIResponseModel<any>) => {
      console.log(error.message);
    });

  }

  onSearch(form: NgForm) {
    const numberToSearchFor = form.value.PhoneForSearch;
    // this.snackBar.showInfo(numberToSearchFor);
    // TODO
    this.sessionService.searchForStudent(numberToSearchFor).subscribe(response => {
      if (response.statusCode === 200) {
        const student: StudentModel = response.results;
        // this.snackBar.showInfo(student.name);
        this.studentSubject.next(student);
      } else {
        this.studentSubject.next(null);
        this.snackBar.showInfo("Not Found !");
      }

    })
  }

  onRegister(form: NgForm) {
    const studentName = form.value.Name;
    // TODO
  }

  onRegisterNew(form: NgForm) {

    debugger;
    const newStudent: StudentModel = new StudentModel();
    newStudent.name = form.value.Name;
    newStudent.phoneNumber = form.value.PhoneNumber;
    newStudent.age = form.value.Age;
    newStudent.major = form.value.Major;
    newStudent.townId = form.value.TownId;
    newStudent.email = form.value.Email;

    //this.sessionService.registerNewStudentToSession(this.currentSession.id, newStudent);
  }

}
