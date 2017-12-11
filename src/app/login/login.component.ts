import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginEmail: string;
  emailValid: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {

  }

  onInput(email: object) {
    this.authService.authenticateUser(email.value, (success) => {
      if (success) {
        this.router.navigate(['/homepage']);
      } else {
        alert("Authentication failed: Email address not found");
        this.loginEmail = '';
      }
    });
  }
}
