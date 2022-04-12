import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes: Routes = [
    {
    path: 'all-recipes',
    component: AllRecipesComponent
  },
  {
    path: 'create-recipe',
    component: CreateRecipeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recipe-details',
    component: RecipeDetailsComponent
  }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class AuthRoutingModule { }
export const RecipesRoutingModule = RouterModule.forChild(routes);