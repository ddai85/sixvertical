import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from './profile';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {
  isLoggedIn: boolean;
  currentUser: Profile;


  constructor ( private http: HttpClient ) {}

  getUsers() {
    return this.http.get(`https://jsonplaceholder.typicode.com/users`)
  }

  //this function will take email from login input, check to see if email exists, return full profile if it does-- return null if not
  authenticateUser(email: string, callback: (success: boolean) => void) {
    this.getUsers().subscribe((data: Array<object>) => {
      
      for (let i = 0; i < data.length; i++) {
        if (email === data[i]['email']) {
          this.isLoggedIn = true;
          this.currentUser = data[i];
          callback(true);
          return;
        }
      }

      this.isLoggedIn = false;
      callback(false);
    });
  }

  logout() {
    this.isLoggedIn = false;
    this.currentUser = null;
  }
}
