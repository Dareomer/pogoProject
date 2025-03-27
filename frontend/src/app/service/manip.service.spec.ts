import { TestBed } from '@angular/core/testing';

import { ManipService } from './manip.service';

describe('ManipService', () => {
  let service: ManipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
