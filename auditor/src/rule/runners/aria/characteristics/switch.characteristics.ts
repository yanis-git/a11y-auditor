/**
 * TODO : when you use this template. do not forget to change switch by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#switch
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const switchRole: AriaRole = "switch";
export const switchCharacteristics: AriaCharacteristics = [
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
  "aria-readonly",
  "aria-relevant",
  "aria-roledescription",
];

export const switchRoleDefinition: AriaRoleDefinition = {
  allowedArias: switchCharacteristics,
  selector: "role[switch]",
};
