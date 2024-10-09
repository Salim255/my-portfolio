import { Component, Input } from "@angular/core";

@Component({
  selector:'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.scss']
})

export class SkillItemComponent {
  @Input() item: any;
  constructor(){}
}
