import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Array<object>;
  mainPost: object;
  comments: Array<object> = [];
  buttonText: string = 'Show Comments';

  constructor() { }

  ngOnInit() {
    this.mainPost = this.post[0];

    for (let i = 1; i < this.post.length; i++) {
      this.comments.push(this.post[i]);
    }
  }

  toggleText() {
    this.buttonText = this.buttonText === 'Show Comments' ? 'Hide Comments' : 'Show Comments'; 
  }
}
