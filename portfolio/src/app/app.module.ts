import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { WorkComponent } from './components/work/work.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePage,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    FooterComponent,
    BodyComponent,
    WorkComponent,
    AboutmeComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
