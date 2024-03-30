import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  designList = ['Merise', 'UML', 'FIGMA'];
  FrontToolsList = ['Angular', 'Ionic', 'CSS', 'HTML', 'React', 'React-Native'];
  FrontLanguageList = ['HTML', 'CSS', 'JavaScript', 'Pug'];
}
