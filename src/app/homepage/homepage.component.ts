import { Component, OnInit } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { ProfileComponent } from '../profile/profile.component';
import { FetchDataService } from '../fetch-data.service';
import { AuthService } from '../authenticate.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  profile = this.authService.currentUser;
  constructor( private fetchDataServer: FetchDataService, private authService: AuthService ) { }

  ngOnInit() {

  }

}
