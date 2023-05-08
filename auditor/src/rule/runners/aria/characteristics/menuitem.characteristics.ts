/**
 * TODO : when you use this template. do not forget to change menuitem by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#menuitem
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const menuitemRole: AriaRole = "menuitem";
export const menuitemCharacteristics: AriaCharacteristics = [
  "aria-posinset",
  "aria-setsize",
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

export const menuitemRoleDefinition: AriaRoleDefinition = {
  allowedArias: menuitemCharacteristics,
  selector: "role[menuitem]",
};
