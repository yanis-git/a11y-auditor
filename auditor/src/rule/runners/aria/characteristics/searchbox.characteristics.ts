/**
 * TODO : when you use this template. do not forget to change searchbox by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#searchbox
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const searchboxRole: AriaRole = "searchbox";
export const searchboxCharacteristics: AriaCharacteristics = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
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
  "aria-multiline",
  "aria-owns",
  "aria-placeholder",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
];

export const searchboxRoleDefinition: AriaRoleDefinition = {
  allowedArias: searchboxCharacteristics,
  selector: "role[searchbox]",
};
