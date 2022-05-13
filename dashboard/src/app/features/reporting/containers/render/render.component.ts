import {Component, Input} from '@angular/core';
import {RuleSet} from '../../../api/constant';

@Component({
  selector: 'a11y-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss']
})
export class RenderComponent {
  @Input() rules: RuleSet[] = [];
}
