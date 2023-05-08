import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CriteriaComponent } from "./criteria.component";
import { RuleStatus } from "../../../api/constant";

describe("CriteriaComponent", () => {
  let component: CriteriaComponent;
  let fixture: ComponentFixture<CriteriaComponent>;
  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaComponent);
    component = fixture.componentInstance;
    component.rule = {
      name: "hello",
      description: "hello",
      hints: [],
      sources: [],
      status: RuleStatus.SUCCESS,
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
