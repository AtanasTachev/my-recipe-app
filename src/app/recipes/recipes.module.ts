import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipe-routing.module';
import { RecipeService } from './recipe.service';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';



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
    RecipeService
  ]
})
export class RecipesModule { }
