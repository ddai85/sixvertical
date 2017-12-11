import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './/app-routing.module'; 
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component'; 
import { AuthService } from './authenticate.service';
import { FetchDataService } from './fetch-data.service';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    ProfileComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ AuthService, FetchDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
