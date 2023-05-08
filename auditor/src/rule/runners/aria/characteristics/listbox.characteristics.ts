/**
 * TODO : when you use this template. do not forget to change listbox by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#listbox
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const listboxRole: AriaRole = "listbox";
export const listboxCharacteristics: AriaCharacteristics = [
  "aria-multiselectable",
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

export const listboxRoleDefinition: AriaRoleDefinition = {
  allowedArias: listboxCharacteristics,
  selector: "role[listbox]",
};
