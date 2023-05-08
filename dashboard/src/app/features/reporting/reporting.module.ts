import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RuleResultStore } from "../api/rule-result-store";

@NgModule({
  imports: [HttpClientModule],
  providers: [RuleResultStore],
})
export class ReportingModule {}
