// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {} from '../../assets/api/' 
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(private http:Http) {
    console.log('Hello ApiProvider Provider');
  }
  getFastFood() {
    return this.http.get('../../assets/api/BreakFast.json')
        .map(res=>{
          return res.json().FastFood;
        })
        .catch(this.handleErrorObservable);
} 
private handleErrorObservable (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.message || error);
    }

}
