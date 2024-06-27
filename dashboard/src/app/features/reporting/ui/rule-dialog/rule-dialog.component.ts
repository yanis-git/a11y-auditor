import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from "@angular/material/dialog";
import { RuleSet } from "../../../api/constant";
import { NgForOf } from "@angular/common";

@Component({
  selector: "a11y-rule-dialog",
  templateUrl: "./rule-dialog.component.html",
  styleUrls: ["./rule-dialog.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgForOf, MatDialogModule],
})
export class RuleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RuleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public rule: RuleSet,
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
