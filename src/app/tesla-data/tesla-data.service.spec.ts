import { TestBed, inject } from '@angular/core/testing';

import { TeslaDataService } from './tesla-data.service';

fdescribe('TeslaDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeslaDataService]
    });
  });

  it('should be created', inject([TeslaDataService], (service: TeslaDataService) => {
    expect(service).toBeTruthy();
  }));

  it('Logging in should set a token in the service', inject([TeslaDataService], async(service: TeslaDataService) => {
     service.login('test', 'password').subscribe(
       () => {
         expect(service.isUserLoggedIn).toBeTruthy();
         expect(service.token).toBe('23629667a9a4e669db96933ca529e37c694252d270a297620971e12f558a1303');
       }
     );

  }));
});
