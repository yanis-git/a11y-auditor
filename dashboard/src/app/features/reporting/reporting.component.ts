import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RuleResultStore} from '../api/rule-result-store';
import {Observable} from 'rxjs';
import {RuleSet} from '../api/constant';

@Component({
  selector: 'a11y-reporting',
  template: `
    <main>
      <a11y-intro><a11y-filter></a11y-filter></a11y-intro>
      <a11y-render [rules]="(sucess$ | async) ?? []"></a11y-render>
    </main>
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
