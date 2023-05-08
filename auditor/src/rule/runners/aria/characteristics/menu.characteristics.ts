/**
 * TODO : when you use this template. do not forget to change menu by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#menu
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const menuRole: AriaRole = "menu";
export const menuCharacteristics: AriaCharacteristics = [
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

export const menuRoleDefinition: AriaRoleDefinition = {
  allowedArias: menuCharacteristics,
  selector: "role[menu]",
};
