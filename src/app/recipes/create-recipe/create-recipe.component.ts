import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateRecipeDto, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.less']
})
export class CreateRecipeComponent implements OnInit {
  
  
  createRecipeFormGroup: FormGroup = this.formBuilder.group({
    'title': new FormControl('', [Validators.required, Validators.minLength(5)]),
    'timeToCook': new FormControl('', [Validators.required, Validators.minLength(5)]),
    'ingredients': new FormControl('', [Validators.required]),
    'howToCook': new FormControl(''),
    'imageUrl': new FormControl(''),
  })
  
  constructor(private formBuilder: FormBuilder, private recipeService: RecipeService, private router: Router) { }
  
  ngOnInit(): void {
    // console.log(user);
  }
  handleCreateRecipe(): void {
    const { title, timeToCook, ingredients, howToCook, imageUrl } = this.createRecipeFormGroup.value;

    const body: CreateRecipeDto = {
      title: title,
      timeToCook: timeToCook,
      ingredients: ingredients,
      howToCook: howToCook,
      imageUrl: imageUrl,
      // creator: user._id
    }


    this.recipeService.createRecipe$(body).subscribe(() => {
      this.router.navigate(['/home']);
    })
  }
}
