// import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
// import {forwardRef, Injectable, NgModule} from '@angular/core';

// import { RECIPES } from './../app/mock/providers/mock-recipes';

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
// import {  } from 'rxjs';

@Injectable()
export class ApiService {
  departments:any;
    constructor(public http:Http) {}
    // getRecipes(): Recipe[] {
    //         return RECIPES;
    //     }

getData() {
    return this.http.get('http://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
        // .map((res:Response) => res.json()); //records in this case
        .map(res => res.json())
        .subscribe(
            data => this.departments = data,
            err => console.log(err),
            () => console.log('Random Quote Complete')
        );
  }
}