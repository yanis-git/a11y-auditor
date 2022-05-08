import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ReportService} from '../api/report.service';

@Component({
  selector: 'a11y-reporting',
  template: `
    <div class="container">
      <a11y-filter></a11y-filter>
      <a11y-render></a11y-render>
    </div>
  `,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ReportingComponent implements OnInit {

  constructor(private _reportService: ReportService) { }

  ngOnInit(): void {
    this._reportService.fetchReport().subscribe(console.log);
  }

}
