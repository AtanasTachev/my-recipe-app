import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AllRecipesComponent } from './recipes/all-recipes/all-recipes.component';
import { CreateRecipeComponent } from './recipes/create-recipe/create-recipe.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'all-recipes',
    component: AllRecipesComponent
  },
  {
    path: 'create-recipe',
    component: CreateRecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
