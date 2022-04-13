import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { TokenInterceptor } from './token.interceptor';
import { RouterModule } from '@angular/router';
import { storageServiceProvider } from './storage.service';
import { UserService } from '../user/user.service';
import { RecipeService } from '../recipes/recipe.service';
// import { storageServiceProvider } from './storage.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: []
})
export class CoreModule { 
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        storageServiceProvider,
        UserService,
        RecipeService,
        {
          provide: HTTP_INTERCEPTORS,
          multi: true,
          useClass: AuthInterceptor
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
        },
      ]
    }
  }
}
