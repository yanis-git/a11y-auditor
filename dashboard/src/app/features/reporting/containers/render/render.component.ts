import {Component, Input} from '@angular/core';
import {RuleSet} from '../../../api/constant';
import { CriteriaComponent } from '../../ui/criteria/criteria.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'a11y-render',
    templateUrl: './render.component.html',
    styleUrls: ['./render.component.scss'],
    standalone: true,
    imports: [NgFor, CriteriaComponent]
})
export class RenderComponent {
  @Input() rules: RuleSet[] = [];
}
