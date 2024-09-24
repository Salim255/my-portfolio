import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { NightModeDirective } from "../directives/night-mode/night-mode.directive";
import { ScrollDirectionDirective } from "../directives/scroll-direction/scroll-direction.directive";
@NgModule({
  declarations: [HeaderComponent , NightModeDirective],
  imports: [CommonModule],
  exports: [HeaderComponent ]
})

export class SharedModule {

}
