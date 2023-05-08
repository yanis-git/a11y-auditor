import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RuleSet } from "../../../api/constant";
import { isRuleSucessPipe, isRuleErrorPipe } from "../../pipes/ruleStatus.pipe";
import { NgClass, LowerCasePipe, NgFor, NgIf } from "@angular/common";

@Component({
  selector: "a11y-criteria",
  templateUrl: "./criteria.component.html",
  styleUrls: ["./criteria.component.scss"],
  standalone: true,
  imports: [
    NgClass,
    NgFor,
    LowerCasePipe,
    isRuleSucessPipe,
    isRuleErrorPipe,
    NgIf,
  ],
})
export class CriteriaComponent {
  @Input() rule!: RuleSet;
  @Output() displayHint: EventEmitter<RuleSet> = new EventEmitter<RuleSet>();
  knowMore(rule: RuleSet) {
    this.displayHint.emit(rule);
  }
}
