/**
 * TODO : when you use this template. do not forget to change progressbar by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#progressbar
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const progressbarRole: AriaRole = "progressbar";
export const progressbarCharacteristics: AriaCharacteristics = [
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
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
];

export const progressbarRoleDefinition: AriaRoleDefinition = {
  allowedArias: progressbarCharacteristics,
  selector: "role[progressbar]",
};
