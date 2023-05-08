import {ChangeDetectionStrategy, Component} from '@angular/core';
import { FooterComponent } from '../../features/footer/footer.component';
import { ReportingComponent } from '../../features/reporting/reporting.component';

@Component({
    selector: 'a11y-report-page',
    template: `
    <a11y-reporting></a11y-reporting>      
    <a11y-footer></a11y-footer>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ReportingComponent, FooterComponent]
})
export class ReportPageComponent {}
