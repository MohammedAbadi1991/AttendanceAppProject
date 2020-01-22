import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SessionModel } from '../../mdoels/session.model';
import { SessionService } from '../../services/session.service';
import { Subscription, Subject, Observable, zip, Subscribable } from 'rxjs';
import { APIResponseModel } from 'src/app/shared/api/api-response';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { LocationModel } from 'src/app/modules/locations/models/location.model';
import { LocationService } from 'src/app/modules/locations/services/locations.service';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { StudentModel } from '../../mdoels/student.model';
import { MajorService } from '../../services/major.service';
import { MajorModel } from '../../mdoels/major.model';

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
  subscription3: Subscription;
  subscription4: Subscription;
  subscription5: Subscription;
  subscription6: Subscription;
  subscription7: Subscription;

  formRegister: FormGroup;
  formSearch: FormGroup;
  allLocations: LocationModel[];
  allMajors: MajorModel[];
  studentSubject = new Subject<StudentModel>();
  currentStudent: StudentModel;

  isForNewStudent: boolean = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private locationService: LocationService,
    private majorService: MajorService,
    private snackBar: SnackbarService) {

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
      MajorId: [null, Validators.required],
      Email: [null, Validators.required],
      TownId: [null, Validators.required],
    });
  }

  ngOnInit() {

    const locationsSub = this.locationService.getAllLocations();
    const majorsSub = this.majorService.getAllMajors();

    this.subscription7 = zip(locationsSub, majorsSub).subscribe(params => {
      this.allLocations = params[0];
      this.allMajors = params[1];
    });

    // Get Majors from db, and restrict update UI data unless 2 subscriptions done
    this.subscription6 = this.studentSubject.subscribe(student => {
      this.currentStudent = student;
      this.formRegister.patchValue({
        Name: this.currentStudent.name,
        PhoneNumber: this.currentStudent.phoneNumber,
        Email: this.currentStudent.email,
        Age: this.currentStudent.age,
        TownId: this.currentStudent.townId,
        MajorId: this.currentStudent.majorId,
      });
      // this.formRegister.value.major = student.major;
      // TODO set data directly to reactive form
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
    if (this.subscription4) {
      this.subscription4.unsubscribe();
    }
    if (this.subscription5) {
      this.subscription5.unsubscribe();
    }
    if (this.subscription6) {
      this.subscription6.unsubscribe();
    }
    if (this.subscription7) {
      this.subscription7.unsubscribe();
    }
  }

  private initForm() {

    this.subscription2 = this.sessionService.getSessionById(this.id).subscribe(session => {
      this.currentSession = session;
    }, (error: APIResponseModel<any>) => {
      console.log(error.message);
    });

  }

  onSearch() {
    const formData = this.formSearch.getRawValue();
    const numberToSearchFor = formData.PhoneForSearch;
    // this.snackBar.showInfo(numberToSearchFor);
    // TODO
    this.subscription5 = this.sessionService.searchForStudent(numberToSearchFor).subscribe(response => {
      if (response.statusCode === 200) {
        const student: StudentModel = response.results;
        this.studentSubject.next(student);
        this.isForNewStudent = false;

      } else {
        this.isForNewStudent = true;
        this.studentSubject.next(null);
        this.snackBar.showInfo("Not Found !");
      }
      // TODO
    })
  }

  onRegister() {

    const oldStudent: StudentModel = new StudentModel();
    oldStudent.id = this.currentStudent.id;
    this.subscription3 = this.sessionService.registerStudentToSession(this.currentSession.id, oldStudent).subscribe(() => {
      this.formRegister.reset();
      this.snackBar.showInfo('Old student succssfully registered.');
    });
  }

  onRegisterNew() {

    const formData = this.formRegister.getRawValue();

    const newStudent: StudentModel = new StudentModel();
    newStudent.name = formData.Name;
    newStudent.phoneNumber = formData.PhoneNumber;
    newStudent.age = formData.Age;
    newStudent.majorId = formData.MajorId;
    newStudent.townId = formData.TownId;
    newStudent.email = formData.Email;

    this.subscription4 = this.sessionService.registerStudentToSession(this.currentSession.id, newStudent).subscribe(() => {
      this.formRegister.reset();
      this.snackBar.showInfo('New student succssfully registered.');
    });
  }

}
