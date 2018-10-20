import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {TeslaDataService} from './tesla-data/tesla-data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private service: TeslaDataService) { }

  canActivate(): boolean {
      const isLoggedIn = this.service.isUserLoggedIn();
      if (! isLoggedIn) {
        this.router.navigateByUrl('login');
      }
      return isLoggedIn;
  }
}
