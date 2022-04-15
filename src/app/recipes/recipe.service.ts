import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBase } from '../core/interfaces/base';
import { IRecipe } from '../core/interfaces/recipe';

const apiUrl = environment.apiUrl;

export interface CreateRecipeDto { 
  title: string,
  timeToCook: string,
  ingredients: string,
  howToCook: string,
  imageUrl: string,
  // creator: string
}



@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  constructor(private httpClient: HttpClient) {}

  // getUser$(): Observable<IUser[]>{
  //   return this.httpClient.get<IUser[]>(`${environment.apiUrl}/users`)
  // }
  
  getRecipes$(): Observable<IRecipe[]>{
    return this.httpClient.get<IRecipe[]>(`${apiUrl}/all-recipes`)
  }
  loadRecipeById(id: string): Observable<IRecipe> {
    return this.httpClient.get<IRecipe>(`${apiUrl}/recipe/${id}/details`, { withCredentials: true });
  }

  likeRecipe(recipeId: string): Observable<void> {
    return this.httpClient.put<void>(`${apiUrl}/likes/${recipeId}`, {}, { withCredentials: true });
  }

  // dislikePost(recipeId: string): Observable<void> {
  //   return this.httpClient.put<void>(`${apiUrl}/dislikes/${recipeId}`, {}, { withCredentials: true });
  // }

    createRecipe$(recipeData: CreateRecipeDto): Observable<IRecipe> {
      console.log(recipeData);
      return this.httpClient.post<IRecipe>(`${environment.apiUrl}/recipe/create-recipe`, recipeData, { withCredentials: true })
    }
}
