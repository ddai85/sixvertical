import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FetchDataService {

  constructor( private http: HttpClient ) { }

  httpPosts() {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }

  httpComments() {
    return this.http.get(`https://jsonplaceholder.typicode.com/comments`);
  }

  //fetch all posts and comments-- return an array of posts (each post is an array with post at index 0, rest of array is comments)
  fetchPosts(userID: number, callback: (posts: Array<object>) => void) {
    this.httpPosts().subscribe((postsData: Array<object>) => {
      this.httpComments().subscribe((commentsData: Array<object>) => {
        const userPosts: Array<object> = [];

        for (let i = 0; i < postsData.length; i++) {
          if(userID === postsData[i]['userId']) {
            let post: Array<object> = [];
            post.push(postsData[i]);
            for (let j = 0; j < commentsData.length; j++) {
              if(postsData[i]['id'] === commentsData[j]['postId']) {
                post.push(commentsData[j]);
              }
            }
            userPosts.push(post);
          }
        }
        callback(userPosts);
      })
    });
  }
}
