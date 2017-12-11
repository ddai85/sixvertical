import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../authenticate.service';
import { Router } from '@angular/router';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() profile: Profile;

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() {

  }

  logout() {
    console.log('Im logging out');
    this.authService.logout();
    this.router.navigate(['/login']);

  }

}
