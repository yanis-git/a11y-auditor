import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RuleResultStore} from '../api/rule-result-store';
import {Observable} from 'rxjs';
import {RuleSet} from '../api/constant';

@Component({
  selector: 'a11y-reporting',
  template: `
    <div class="container">
      <a11y-filter></a11y-filter>
      <a11y-render [rules]="(sucess$ | async) ?? []"></a11y-render>
    </div>
  `,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ReportingComponent {
  public errors$: Observable<RuleSet[]>;
  public sucess$: Observable<RuleSet[]>;

  constructor(private _reportService: RuleResultStore) {
    this.errors$ = this._reportService.errors$;
    this.sucess$ = this._reportService.sucess$;

  }
}
