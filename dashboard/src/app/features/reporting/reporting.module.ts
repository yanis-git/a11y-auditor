import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './containers/filter/filter.component';
import { RenderComponent } from './containers/render/render.component';
import { CriteriaComponent } from './ui/criteria/criteria.component';
import { ReportingComponent } from './reporting.component';
import {HttpClientModule} from '@angular/common/http';
import {RuleResultStore} from '../api/rule-result-store';
import {isRuleErrorPipe, isRuleSucessPipe} from './pipes/ruleStatus.pipe';



@NgModule({
  declarations: [
    FilterComponent,
    RenderComponent,
    CriteriaComponent,
    ReportingComponent,
    isRuleSucessPipe,
    isRuleErrorPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [RuleResultStore],
  exports: [ReportingComponent]
})
export class ReportingModule { }
