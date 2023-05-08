/**
 * TODO : when you use this template. do not forget to change radiogroup by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#radiogroup
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const radiogroupRole: AriaRole = "radiogroup";
export const radiogroupCharacteristics: AriaCharacteristics = [
  "aria-readonly",
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

export const radiogroupRoleDefinition: AriaRoleDefinition = {
  allowedArias: radiogroupCharacteristics,
  selector: "role[radiogroup]",
};
