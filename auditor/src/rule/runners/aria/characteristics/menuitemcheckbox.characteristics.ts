/**
 * TODO : when you use this template. do not forget to change menuitemcheckbox by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#menuitemcheckbox
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const menuitemcheckboxRole: AriaRole = "menuitemcheckbox";
export const menuitemcheckboxCharacteristics: AriaCharacteristics = [
  "aria-atomic",
  "aria-busy",
  "aria-checked",
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
  "aria-posinset",
  "aria-readonly",
  "aria-relevant",
  "aria-roledescription",
  "aria-setsize",
];

export const menuitemcheckboxRoleDefinition: AriaRoleDefinition = {
  allowedArias: menuitemcheckboxCharacteristics,
  selector: "role[menuitemcheckbox]",
};
