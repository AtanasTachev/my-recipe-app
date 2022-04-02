import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';

const routes: Routes = [
    {
    path: 'all-recipes',
    component: AllRecipesComponent
  },
  {
    path: 'create-recipe',
    component: CreateRecipeComponent
  }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class AuthRoutingModule { }
export const RecipesRoutingModule = RouterModule.forChild(routes);