import { Component, OnInit, OnChanges, Input, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IRecipe } from 'src/app/core/interfaces/recipe';
import { RecipeService } from '../recipe.service';

// @Injectable({ providedIn: 'root' });

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less']
})
export class RecipeComponent implements OnInit{

  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
  // canSubscribe$!: Observable<boolean>;

  @Input() recipe!: IRecipe;
  recipes: IRecipe[] = [];

  constructor(private recipeService: RecipeService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes$().subscribe(recipes => {
      this.recipes = recipes;
      // console.log(recipes);
    })
  }
  ngOnChanges(): void {
    // this.canSubscribe$ = this.authService.currentUser$.pipe(map((currentUser) => {
    //   if (!currentUser || !this.recipe) {
    //     return false;
    //   }

    //   return !this.recipe.subscribers.includes(currentUser._id);
    // }))
  }
}
