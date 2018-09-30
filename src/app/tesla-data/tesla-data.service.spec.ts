import { TestBed, inject } from '@angular/core/testing';

import { TeslaDataService } from './tesla-data.service';

describe('TeslaDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeslaDataService]
    });
  });

  it('should be created', inject([TeslaDataService], (service: TeslaDataService) => {
    expect(service).toBeTruthy();
  }));
});
