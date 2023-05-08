/**
 * TODO : when you use this template. do not forget to change grid by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#grid
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const gridRole: AriaRole = "grid";
export const gridCharacteristics: AriaCharacteristics = [
  "aria-level",
  "aria-multiselectable",
  "aria-readonly",
  "aria-activedescendant",
  "aria-atomic",
  "aria-busy",
  "aria-colcount",
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
  "aria-owns",
  "aria-relevant",
  "aria-roledescription",
  "aria-rowcount",
];

export const gridRoleDefinition: AriaRoleDefinition = {
  allowedArias: gridCharacteristics,
  selector: "role[grid]",
};
