import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './containers/filter/filter.component';
import { RenderComponent } from './containers/render/render.component';
import { CriteriaComponent } from './ui/criteria/criteria.component';
import { ReportingComponent } from './reporting.component';



@NgModule({
  declarations: [
    FilterComponent,
    RenderComponent,
    CriteriaComponent,
    ReportingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ReportingComponent]
})
export class ReportingModule { }
