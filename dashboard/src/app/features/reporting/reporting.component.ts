import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RuleResultStore } from "../api/rule-result-store";
import { Observable } from "rxjs";
import { RuleSet } from "../api/constant";
import { AsyncPipe } from "@angular/common";
import { RenderComponent } from "./containers/render/render.component";
import { FilterComponent } from "./containers/filter/filter.component";
import { IntroComponent } from "./ui/intro/intro.component";

@Component({
  selector: "a11y-reporting",
  template: `
    <main>
      <a11y-intro><a11y-filter></a11y-filter></a11y-intro>
      <a11y-render [rules]="(errors$ | async) ?? []"></a11y-render>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IntroComponent, FilterComponent, RenderComponent, AsyncPipe],
})
export class ReportingComponent {
  public errors$: Observable<RuleSet[]>;
  public sucess$: Observable<RuleSet[]>;

  constructor(private _reportService: RuleResultStore) {
    this.errors$ = this._reportService.errors$;
    this.sucess$ = this._reportService.sucess$;
  }
}
