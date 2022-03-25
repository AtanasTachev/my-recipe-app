import { Injectable, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@Injectable() 
export class PostService {
  constructor(private http: HttpClient) {}
  getAllPosts(): Observable<Post[]> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<Post[]>(url);
  }
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}