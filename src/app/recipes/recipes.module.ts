import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipe-routing.module';
import { RecipeService } from './recipe.service';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { UserService } from '../user/user.service';
import { AuthService } from '../auth.service';
import { storageServiceProvider } from '../core/storage.service';
import { AuthInterceptor } from '../core/auth.interceptor';
import { TokenInterceptor } from '../core/token.interceptor';



@NgModule({
  declarations: [
    AllRecipesComponent,
    RecipeComponent,
    CreateRecipeComponent,
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RecipesRoutingModule,
    HttpClientModule
  ],
  exports: [
    AllRecipesComponent,
    RecipeComponent,
    CreateRecipeComponent,
    RecipeDetailsComponent
  ],
  providers: [
    RecipeService,
    UserService,
    AuthService,
    storageServiceProvider,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class RecipesModule { }
