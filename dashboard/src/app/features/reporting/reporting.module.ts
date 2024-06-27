import { NgModule } from "@angular/core";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { RuleResultStore } from "../api/rule-result-store";

@NgModule({
  imports: [],
  providers: [RuleResultStore, provideHttpClient(withInterceptorsFromDi())],
})
export class ReportingModule {}
