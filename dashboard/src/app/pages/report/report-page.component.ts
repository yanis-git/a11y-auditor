import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'a11y-report-page',
    template:`
    <a11y-reporting></a11y-reporting>      
    <a11y-footer></a11y-footer>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportPageComponent {}
