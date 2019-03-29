import { TestBed } from '@angular/core/testing';

import { NgxAaaDatepickerService } from './ngx-aaa-datepicker.service';

describe('NgxAaaDatepickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAaaDatepickerService = TestBed.get(NgxAaaDatepickerService);
    expect(service).toBeTruthy();
  });
});
