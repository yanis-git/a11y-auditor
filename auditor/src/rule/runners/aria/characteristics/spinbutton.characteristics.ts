/**
 * TODO : when you use this template. do not forget to change spinbutton by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#spinbutton
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const spinbuttonRole: AriaRole = "spinbutton";
export const spinbuttonCharacteristics: AriaCharacteristics = [
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
  "aria-valuetext",
];

export const spinbuttonRoleDefinition: AriaRoleDefinition = {
  allowedArias: spinbuttonCharacteristics,
  selector: "role[spinbutton]",
};
