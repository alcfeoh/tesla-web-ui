import { Component } from '@angular/core';
import {TeslaDataService} from '../tesla-data/tesla-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginError = false;

  constructor(private service: TeslaDataService, private router: Router) {

  }

  logIn(email: string, password: string) {
      this.service.login(email, password).subscribe(
        () => this.router.navigateByUrl('state'),
        (err) => this.loginError = true
      );
  }

}
