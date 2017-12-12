import { Component, OnInit, Input } from '@angular/core';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() posts: Array<object>;
  
  constructor() { }

  ngOnInit() { }
}
