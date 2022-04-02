import { Component, OnInit } from '@angular/core';
import { IRecipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less']
})
export class RecipeComponent implements OnInit {

  recipes: IRecipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipe$().subscribe(recipes => {
      this.recipes = recipes;
      // console.log(recipes);
    })
  }
}
