import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {RecipeDetailPage} from '../pages/recipe-detail/recipe-detail';
import { HttpModule } from '@angular/http';
import {ApiService } from '../providers/recipes.service';  

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RecipeDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RecipeDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
