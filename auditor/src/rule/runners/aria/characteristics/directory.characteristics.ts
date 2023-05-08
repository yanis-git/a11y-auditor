/**
 * TODO : when you use this template. do not forget to change directory by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#directory
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const directoryRole: AriaRole = "directory";
export const directoryCharacteristics: AriaCharacteristics = [
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

export const directoryRoleDefinition: AriaRoleDefinition = {
  allowedArias: directoryCharacteristics,
  selector: "role[directory]",
};
