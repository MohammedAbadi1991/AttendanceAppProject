import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMajorbylocationComponent } from './report-majorbylocation.component';

describe('ReportMajorbylocationComponent', () => {
  let component: ReportMajorbylocationComponent;
  let fixture: ComponentFixture<ReportMajorbylocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportMajorbylocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMajorbylocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
