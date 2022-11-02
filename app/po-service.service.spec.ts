import { TestBed } from '@angular/core/testing';

import { POServiceService } from './po-service.service';

describe('POServiceService', () => {
  let service: POServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(POServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
