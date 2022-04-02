import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { backendUrls } from '../../assets/constants';

export interface IRecipe {
  "title": string,
  "timeToCook": string,
  "ingredients": string,
  "howToCook": string,
  "imageUrl":string
}

const baseUrl = 'http://localhost:3030'


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient) {}

    getRecipe$(): Observable<IRecipe[]>{
      return this.httpClient.get<IRecipe[]>(baseUrl)
    }
}
