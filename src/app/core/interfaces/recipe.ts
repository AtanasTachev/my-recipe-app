import { IBase } from "./base";

export interface IRecipe extends IBase{
    "title": string,
    "timeToCook": string,
    "ingredients": string,
    "howToCook": string,
    "imageUrl":string,
    "creator": string
  }