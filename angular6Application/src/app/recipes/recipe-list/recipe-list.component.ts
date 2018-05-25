import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Fish Recipe', 'Salmon with lemon', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg')
    new Recipe('Taco Recipe', 'Taco Fiesta', 'https://www.landolakes.com/lolretail/media/LOLR-Media/Recipe-Collections/easy-dinner-recipes-for-kids.jpg?ext=.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
