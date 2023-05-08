import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReportingModule } from "../../features/reporting/reporting.module";
import { ReportPageComponent } from "./report-page.component";
import { FooterModule } from "../../features/footer/footer.module";

const routes: Routes = [{ path: "", component: ReportPageComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReportingModule,
    FooterModule,
    ReportPageComponent,
  ],
})
export class ReportModule {}
