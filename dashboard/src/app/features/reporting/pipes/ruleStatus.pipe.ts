import { Pipe, PipeTransform } from "@angular/core";
import { RuleSet, RuleStatus } from "../../api/constant";

@Pipe({
  name: "isRuleSucess",
  pure: true,
  standalone: true,
})
export class isRuleSucessPipe implements PipeTransform {
  transform(rule: RuleSet): boolean {
    return rule.status === RuleStatus.SUCCESS;
  }
}

@Pipe({
  name: "isRuleError",
  pure: true,
  standalone: true,
})
export class isRuleErrorPipe implements PipeTransform {
  transform(rule: RuleSet): boolean {
    return rule.status === RuleStatus.ERROR;
  }
}
