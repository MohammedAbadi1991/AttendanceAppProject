import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceappgraphsComponent } from './attendanceappgraphs.component';

describe('AttendanceappgraphsComponent', () => {
  let component: AttendanceappgraphsComponent;
  let fixture: ComponentFixture<AttendanceappgraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceappgraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceappgraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
