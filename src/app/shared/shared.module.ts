import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    UserModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class SharedModule { }
