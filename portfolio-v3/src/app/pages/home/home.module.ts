import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ExperienceComponent } from 'src/app/components/experience/experience.component';
import { WorkComponent } from 'src/app/components/work/work.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { AboutMeComponent } from 'src/app/components/about-me/about-me.component';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';
import { StarsDirective } from 'src/app/directives/stars/stars.directive';
import { ScrollDirectionDirective } from 'src/app/directives/scroll-direction/scroll-direction.directive';
import { SkillsComponent } from 'src/app/components/skills/skills.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkItemComponent } from 'src/app/components/work/work-item/work-item.component';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    ExperienceComponent,
    WorkComponent,
    WorkItemComponent,
    FooterComponent,
    AboutMeComponent,
    WelcomeComponent,
    SkillsComponent,
    StarsDirective,
    ScrollDirectionDirective
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatIconModule
  ]
})

export class HomeModule {
  onScrollUp(){}
  onScrollDown() {}
 }
