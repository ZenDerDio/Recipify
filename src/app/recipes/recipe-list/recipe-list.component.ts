import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A recipe!',
      'This is the way that description goes.',
      'https://www.freevector.com/uploads/vector/preview/28809/Realistic_food_vector_8.jpg'),
    new Recipe('A second recipe!',
      'This is the way that description goes, again.',
      'https://www.freevector.com/uploads/vector/preview/28809/Realistic_food_vector_8.jpg')
  ];
  @Output() recipeSelectedPopulate = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelectedPopulate.emit(recipe);
  }

}
