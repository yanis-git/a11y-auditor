/**
 * @source https://www.w3.org/TR/wai-aria-1.1/#checkbox
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const checkboxRole: AriaRole = "checkbox";
export const checkboxCharacteristics: AriaCharacteristics = [
  "aria-atomic",
  "aria-busy",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-dropeffect",
  "aria-errormessage",
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
  "aria-readonly",
  "aria-checked",
];

export const checkboxRoleDefinition: AriaRoleDefinition = {
  allowedArias: checkboxCharacteristics,
  selector: 'input[type="checkbox"], role[checkbox]',
};
