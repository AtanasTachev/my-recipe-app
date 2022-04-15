import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, mergeMap, Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IRecipe } from 'src/app/core/interfaces/recipe';
import { IUser } from 'src/app/core/interfaces/user';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.less']
})
export class RecipeDetailsComponent implements OnInit {
  recipe!: IRecipe;
  refreshRecipeRequest$ = new BehaviorSubject(undefined);

  canSubscribe: boolean = false;
  currentUser?: IUser;
  isUserOwner: boolean = false;
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;

  constructor(private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  ngOnInit(): void {
    combineLatest([
      this.activatedRoute.params
        .pipe(
          mergeMap(params => {
            const recipeId = params['recipeId'];
            return this.refreshRecipeRequest$.pipe(mergeMap(() => this.recipeService.loadRecipeById(recipeId)))
          })
        ),
      this.authService.currentUser$
    ])
      .subscribe(([recipe, user]) => {
        this.currentUser = user
        this.recipe = recipe;
        // this.canSubscribe = user && !this.recipe.subscribers.includes(user?._id);
        this.isUserOwner = user && this.recipe.userId === user._id;
      });
  }
  like(comment: IRecipe): void {
    this.recipeService.likeRecipe(comment._id).subscribe(() => this.refreshRecipeRequest$.next(undefined));
  }

  // unlike(comment: IRecipe): void {
  //   this.recipeService.dislikeRecipe(comment._id).subscribe(() => this.refreshRecipeRequest$.next(undefined));
  // }

}
