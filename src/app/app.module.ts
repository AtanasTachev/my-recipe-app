import { Injectable, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';
import { RecipesModule } from './recipes/recipes.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    RecipesModule,
    AuthModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [
    AppComponent
]
})
export class AppModule { }

// @Injectable() 
// export class PostService {
//   constructor(private http: HttpClient) {}
//   getAllPosts(): Observable<Post[]> {
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     return this.http.get<Post[]>(url);
//   }
// }

// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }