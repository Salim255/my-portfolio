import { Component } from "@angular/core";

export interface SkillsItem {
  title: string;
  icon: string;
  stacks: any
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillsList :SkillsItem [] = []
    constructor(){
      this.skillsList = [{title: 'Frontend', icon: "fa-solid fa-desktop", stacks:
        ['Angular', 'React', 'Ionic','React native (Occasionally)', 'Sass, CSS', 'HTML' ] },
        {title: 'Backend', icon: 'fa-solid fa-database',
          stacks: ['Nodejs', 'JavasScript', 'Python', 'Postgresql', 'Mongodb']},
        {title: 'DevOps', icon: 'fa-solid fa-gear',
          stacks: ['Docker', 'Kubernetes','Ansible', 'Jenkins', 'prometheus', 'Grafana'

         ]}]
    }

}
