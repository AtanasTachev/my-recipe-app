import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeComponent } from './recipe/recipe.component';



@NgModule({
  declarations: [
    AllRecipesComponent,
    RecipeComponent
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
