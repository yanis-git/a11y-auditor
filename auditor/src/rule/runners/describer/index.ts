import { Runner } from "../../index";
import { isDescribedByIsReferToValidElement } from "./isDescribedByIsReferToValidElement.checker";
import { isLabelAreInConflict } from "./isLabelAreInConflict.checker";

export const describerRunners: Runner[] = [
  isDescribedByIsReferToValidElement,
  isLabelAreInConflict,
];
