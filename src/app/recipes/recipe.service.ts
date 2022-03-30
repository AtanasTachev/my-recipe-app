import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { backendUrls } from '../../assets/constants';

export interface IRecipe {
  "title": string,
  "timeToCook": string,
  "ingredients": string,
  "howToCook": string,
  "imageUrl":string
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient) {}

    getUser$(): Observable<IRecipe[]>{
      return this.httpClient.get<IRecipe[]>(backendUrls.baseUrl)
    }
}
