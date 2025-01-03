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
import { ScrollAnimationDirective } from 'src/app/directives/scroll-animation/scroll-animation';
import { SkillItemComponent } from 'src/app/components/skills/skills-item/skills-item.component';
import { SkillsComponent } from 'src/app/components/skills/skills.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeaturedComponent } from 'src/app/components/featured/featured.component';
import { FeaturedItemComponent } from 'src/app/components/featured/featured-item/featured-item.component';
import { MediaComponent } from 'src/app/components/media/media.component';
import { CallForActionComponent } from 'src/app/components/call-for-action/call-for-action.component';
import { WebCreationsComponent } from 'src/app/components/web-creations/web-creations.component';
import { MethodologyComponent } from 'src/app/components/methodology/methodology.component';
const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    ExperienceComponent,
    WorkComponent,
    FooterComponent,
    AboutMeComponent,
    WelcomeComponent,
    FeaturedComponent,
    FeaturedItemComponent,
    MediaComponent,
    SkillItemComponent,
    SkillsComponent,
    StarsDirective,
    ScrollDirectionDirective,
    ScrollAnimationDirective,
    CallForActionComponent,
    WebCreationsComponent,
    MethodologyComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,

  ]
})

export class HomeModule {
  onScrollUp(){}
  onScrollDown() {}
 }
