import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const appRoutes: Routes = [
  {
    path: '',
    component:HomeComponent   ,
  }
];

@NgModule({
  declarations: [
    AppComponent,

  ],

  imports: [BrowserModule, RouterModule.forRoot(appRoutes), BrowserAnimationsModule,SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
