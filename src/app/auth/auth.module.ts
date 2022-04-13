import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { IAuthState, profileReducer, loginReducer } from './+store';
import { ProfileEffects } from './+store/profile.efects';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    StoreModule.forFeature<IAuthState>('auth', {
      profile: profileReducer,
      login: loginReducer,
    }),
    EffectsModule.forFeature([ProfileEffects])
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule {}

