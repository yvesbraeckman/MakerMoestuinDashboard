import { TestBed } from '@angular/core/testing';

import { BloembakServiceService } from './bloembak-service.service';

describe('BloembakServiceService', () => {
  let service: BloembakServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloembakServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
