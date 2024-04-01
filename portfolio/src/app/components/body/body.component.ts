import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  designList = ['Merise', 'UML', 'Figma'];
  FrontEndSkills = [
    'Angular',
    'Ionic',
    'React',
    'React-Native',
    'CSS',
    'HTML',
    'Javascript',
  ];
  BackEndSkills = [
    'Node',
    'Express',
    'JavaScript',
    'TypeScript',
    'Python',
    'Django',
  ];
  DevOpsSkills = [
    'Git',
    'gitFlow',
    'GitHub',
    'GitHub Actions',
    'Docker',
    'Docker-compose',
    'Kubernetes',
    'Unit Tests',
    'TD Tests',
    'Integration Tests',
    'CI/CD',
    'Prometheus',
    'Grafana',
  ];
}
