import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipe-routing.module';



@NgModule({
  declarations: [
    AllRecipesComponent,
    RecipeComponent,
    CreateRecipeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RecipesRoutingModule,
    HttpClientModule
  ],
  exports: [
    AllRecipesComponent,
    RecipeComponent
  ]
})
export class RecipesModule { }
