/**
 * @source https://www.w3.org/TR/wai-aria-1.1/#banner
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const bannerRole: AriaRole = "banner";
export const bannerCharacteristics: AriaCharacteristics = [
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

export const bannerRoleDefinition: AriaRoleDefinition = {
  allowedArias: bannerCharacteristics,
  selector: "header, [role=banner]",
};
