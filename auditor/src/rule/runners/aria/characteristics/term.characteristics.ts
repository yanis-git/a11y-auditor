/**
 * TODO : when you use this template. do not forget to change term by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#term
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const termRole: AriaRole = "term";
export const termCharacteristics: AriaCharacteristics = [
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
  "aria-owns",
  "aria-relevant",
  "aria-roledescription",
];

export const termRoleDefinition: AriaRoleDefinition = {
  allowedArias: termCharacteristics,
  selector: "role[term]",
};
