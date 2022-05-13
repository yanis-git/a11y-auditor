import {Component, Input} from '@angular/core';
import {RuleSet} from '../../../api/constant';

@Component({
  selector: 'a11y-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent {
  @Input() rule!: RuleSet;
}
