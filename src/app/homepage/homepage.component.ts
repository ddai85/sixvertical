import { Component, OnInit } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { ProfileComponent } from '../profile/profile.component';
import { FetchDataService } from '../fetch-data.service';
import { AuthService } from '../authenticate.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  profile: Profile = this.authService.currentUser;
  posts: Array<object>;
  constructor( private fetchDataService: FetchDataService, private authService: AuthService ) { }

  ngOnInit() {
    this.fetchDataService.fetchPosts(this.profile.id, (posts) => {
      this.posts = posts;
    });
  }

}
