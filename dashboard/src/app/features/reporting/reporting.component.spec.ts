import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ReportingComponent } from "./reporting.component";
import { RuleResultStore } from "../api/rule-result-store";
import { HttpClientModule } from "@angular/common/http";

describe("ReportingComponent", () => {
  let component: ReportingComponent;
  let fixture: ComponentFixture<ReportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [RuleResultStore],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
