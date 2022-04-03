import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user/user.module';
import { HomePageComponent } from './home-page/home-page.component';



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
