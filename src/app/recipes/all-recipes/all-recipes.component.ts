import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.less']
})
export class AllRecipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.recipeService.getUser$().subscribe(recipe => {
    //   this.recipes = recipes;
    // })
  }

}
