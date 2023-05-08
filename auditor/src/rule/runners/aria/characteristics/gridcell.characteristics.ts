/**
 * TODO : when you use this template. do not forget to change gridcell by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#gridcell
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const gridcellRole: AriaRole = "gridcell";
export const gridcellCharacteristics: AriaCharacteristics = [
  "aria-readonly",
  "aria-required",
  "aria-selected",
  "aria-atomic",
  "aria-busy",
  "aria-colindex",
  "aria-colspan",
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
  "aria-rowindex",
  "aria-rowspan",
];

export const gridcellRoleDefinition: AriaRoleDefinition = {
  allowedArias: gridcellCharacteristics,
  selector: "role[gridcell]",
};
