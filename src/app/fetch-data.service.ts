import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FetchDataService {

  constructor( private http: HttpClient ) { }

  getProfile() {
    return this.http.get(`https://jsonplaceholder.typicode.com/users`)
  }

  fetchProfile(userID: number) {

  }

  fetchPosts(userID: number) {

  }

}
