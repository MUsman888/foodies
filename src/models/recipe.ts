export class Recipe{
    RecName:string;
    ingredients:Array<Ingredients>;
    steps: string[];
    timers:number[];
    // imageURL:string;
    // originalURL:string;
   
    // id: string;
    // recipeName: string;
    // thumbnailImageUrl: string;
    // largeImageUrl: string;
    // totalTimeInSeconds: number;
    // rating: number;
    // numberOfServings: number;
    // ingredients: string[];
}

export class Ingredients{
    quantity:string;
    name:string;
    type:string;
   
}