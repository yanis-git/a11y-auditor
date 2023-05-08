/**
 * TODO : when you use this template. do not forget to change figure by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#figure
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const figureRole: AriaRole = "figure";
export const figureCharacteristics: AriaCharacteristics = [
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

export const figureRoleDefinition: AriaRoleDefinition = {
  allowedArias: figureCharacteristics,
  selector: "figure, role[figure]",
};
