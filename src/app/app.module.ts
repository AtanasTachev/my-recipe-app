import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
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