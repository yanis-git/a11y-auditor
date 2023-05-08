/**
 * TODO : when you use this template. do not forget to change composite by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#composite
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const compositeRole: AriaRole = "composite";
export const compositeCharacteristics: AriaCharacteristics = [
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
];

export const compositeRoleDefinition: AriaRoleDefinition = {
  allowedArias: compositeCharacteristics,
  selector: "role[composite]",
};
