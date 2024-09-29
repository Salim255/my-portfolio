import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { NightModeDirective } from "../directives/night-mode/night-mode.directive";
import { AppHeaderDirective } from "../directives/app-header/app-header.directive";
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [HeaderComponent , NightModeDirective, AppHeaderDirective],
  imports: [CommonModule, MatIconModule],
  exports: [HeaderComponent ]
})

export class SharedModule {

}
