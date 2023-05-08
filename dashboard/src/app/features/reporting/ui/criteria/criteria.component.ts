import {Component, Input} from '@angular/core';
import {RuleSet} from '../../../api/constant';
import { isRuleSucessPipe, isRuleErrorPipe } from '../../pipes/ruleStatus.pipe';
import { NgClass, LowerCasePipe } from '@angular/common';

@Component({
    selector: 'a11y-criteria',
    templateUrl: './criteria.component.html',
    styleUrls: ['./criteria.component.scss'],
    standalone: true,
    imports: [NgClass, LowerCasePipe, isRuleSucessPipe, isRuleErrorPipe]
})
export class CriteriaComponent {
  @Input() rule!: RuleSet;
}
