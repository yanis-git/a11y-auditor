import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
