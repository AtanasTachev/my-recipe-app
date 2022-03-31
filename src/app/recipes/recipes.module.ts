import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';



@NgModule({
  declarations: [
    AllRecipesComponent,
    RecipeComponent,
    CreateRecipeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AllRecipesComponent,
    RecipeComponent
  ]
})
export class RecipesModule { }
