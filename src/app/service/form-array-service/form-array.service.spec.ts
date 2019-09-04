import { TestBed } from '@angular/core/testing';

import { FormArrayService } from './form-array.service';

describe('FormArrayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormArrayService = TestBed.get(FormArrayService);
    expect(service).toBeTruthy();
  });
});
