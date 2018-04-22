import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import {ListPage} from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // providers:[ApiService],
})
export class HomePage {

  Categories:any;

  constructor(private api:ApiProvider, public navCtrl: NavController) {
    // this.api.getFastFood().subscribe(data=>{
    //   console.log("home subscribe",data);  
    //   // localStorage.setItem('user', JSON.stringify(this.email));
    //   this.Categories=data.meals;
    //   console.log(data);

    //   },
    //   error=>{
    //   console.log(error);
    //   })
  }

  FastFood(){
    this.navCtrl.push(ListPage);
  }

}
