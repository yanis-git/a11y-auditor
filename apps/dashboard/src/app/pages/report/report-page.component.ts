import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'a11y-report-page',
    template:`<a11y-reporting></a11y-reporting>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportPageComponent {}
