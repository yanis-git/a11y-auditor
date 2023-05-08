/**
 * TODO : when you use this template. do not forget to change window by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#window
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const windowRole: AriaRole = "window";
export const windowCharacteristics: AriaCharacteristics = [
  "aria-expanded",
  "aria-modal",
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

export const windowRoleDefinition: AriaRoleDefinition = {
  allowedArias: windowCharacteristics,
  selector: "role[window]",
};
