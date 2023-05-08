import { Component, Input } from "@angular/core";
import { RuleSet } from "../../../api/constant";
import { CriteriaComponent } from "../../ui/criteria/criteria.component";
import { NgFor } from "@angular/common";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { RuleDialogComponent } from "../../ui/rule-dialog/rule-dialog.component";

@Component({
  selector: "a11y-render",
  templateUrl: "./render.component.html",
  styleUrls: ["./render.component.scss"],
  standalone: true,
  imports: [NgFor, CriteriaComponent, MatDialogModule, RuleDialogComponent],
})
export class RenderComponent {
  @Input() rules: RuleSet[] = [];

  constructor(public dialog: MatDialog) {}

  displayHint(rule: RuleSet) {
    this.dialog.open(RuleDialogComponent, { data: rule });
  }
}
