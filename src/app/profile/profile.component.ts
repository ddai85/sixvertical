import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../authenticate.service';
import { Router } from '@angular/router';

interface Profile {
  address: object;
  company: object;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() profile: Profile;

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() {
    console.log(this.profile);
    console.log(this.authService.isLoggedIn);
  }

  logout() {
    console.log('Im logging out');
    this.authService.logout();
    this.router.navigate(['/login']);

  }

}
