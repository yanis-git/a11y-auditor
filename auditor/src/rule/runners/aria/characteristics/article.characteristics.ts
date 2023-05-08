/**
 * @source https://www.w3.org/TR/wai-aria-1.1/#article
 */

import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const articleRole: AriaRole = "article";
export const articleCharacteristics: AriaCharacteristics = [
  "aria-posinset",
  "aria-setsize",
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

export const articleRoleDefinition: AriaRoleDefinition = {
  allowedArias: articleCharacteristics,
  selector: 'article, [role="article"]',
};
