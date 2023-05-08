/**
 * TODO : when you use this template. do not forget to change tree by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#tree
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const treeRole: AriaRole = "tree";
export const treeCharacteristics: AriaCharacteristics = [
  "aria-multiselectable",
  "aria-required",
  "aria-activedescendant",
  "aria-atomic",
  "aria-busy",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-dropeffect",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-grabbed",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-live",
  "aria-orientation",
  "aria-owns",
  "aria-relevant",
  "aria-roledescription",
];

export const treeRoleDefinition: AriaRoleDefinition = {
  allowedArias: treeCharacteristics,
  selector: "role[tree]",
};
