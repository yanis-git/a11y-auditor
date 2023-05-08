/**
 * @source https://www.w3.org/TR/wai-aria-1.1/#heading
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const headingRole: AriaRole = "heading";
export const headingCharacteristics: AriaCharacteristics = [
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
  "aria-level",
];

export const headingRoleDefinition: AriaRoleDefinition = {
  allowedArias: headingCharacteristics,
  selector: "h1, h2, h3, h4, h5, h6, role[heading]",
};
