/**
 * @source https://www.w3.org/TR/wai-aria-1.1/#alertdialog
 */

import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const alertdialogRole: AriaRole = "alertdialog";
export const alertdialogCharacteristics: AriaCharacteristics = [
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
  "aria-modal",
  "aria-owns",
  "aria-relevant",
  "aria-roledescription",
];

export const alertdialogRoleDefinition: AriaRoleDefinition = {
  allowedArias: alertdialogCharacteristics,
  selector: '[role="alertdialog"]',
};
