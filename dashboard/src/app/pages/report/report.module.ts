import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReportingModule} from '../../features/reporting/reporting.module';
import {ReportPageComponent} from './report-page.component';
import {FooterModule} from '../../features/footer/footer.module';

const routes: Routes = [
  {path: '', component: ReportPageComponent}
];

@NgModule({
  declarations: [ReportPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReportingModule,
    FooterModule
  ]
})
export class ReportModule { }
