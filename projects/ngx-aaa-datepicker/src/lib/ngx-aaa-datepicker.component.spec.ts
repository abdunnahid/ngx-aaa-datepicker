import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAaaDatepickerComponent } from './ngx-aaa-datepicker.component';

describe('NgxAaaDatepickerComponent', () => {
  let component: NgxAaaDatepickerComponent;
  let fixture: ComponentFixture<NgxAaaDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAaaDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAaaDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
