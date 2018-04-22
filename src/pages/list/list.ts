import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Recipe } from '../../models/recipe';
import {RecipeDetailPage} from '../recipe-detail/recipe-detail';


import { ApiProvider } from '../../providers/api/api';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  // id: string;
  // recipeName: string;
  // thumbnailImageUrl: string;
  // largeImageUrl: string;
  // totalTimeInSeconds: number;
  // rating: number;
  // numberOfServings: number;
  // ingredients: string[];




  recipes: Array<Recipe>=[];
  searchTerm: string = '';
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private recipesService: ApiProvider) {  
     
  } 

  initializeRecipes(): void {
    this.recipesService.getFastFood().subscribe(res=>
    { this.recipes=res; });
    console.log(this.recipes);
  } 
  
  ionViewDidLoad() {
    this.initializeRecipes();
  }

  onSelect(recipe: Recipe): void {
    this.navCtrl.push(RecipeDetailPage, {recipe: recipe});
  }

  
  searchRecipes(searchbar){
    // Reset recipes array back to all of the items
    // this.initializeRecipes();

    // if the search term is an empty string return all items
    if (!this.searchTerm) {
      return this.recipes;
    }
    else{
    
   
    this.recipes = this.recipes.filter((item) => {
        return item.RecName.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    }); 
  }
}

}
