/**
 * TODO : when you use this template. do not forget to change widget by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#widget
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const widgetRole: AriaRole = "widget";
export const widgetCharacteristics: AriaCharacteristics = [
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

export const widgetRoleDefinition: AriaRoleDefinition = {
  allowedArias: widgetCharacteristics,
  selector: "role[widget]",
};
