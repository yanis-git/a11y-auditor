/**
 * TODO : when you use this template. do not forget to change tpl by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#tpl
 */
import { AriaCharacteristics, AriaRole, AriaRoleDefinition } from "./type";

export const tplRole: AriaRole = "tpl";
export const tplCharacteristics: AriaCharacteristics = [];

export const tplRoleDefinition: AriaRoleDefinition = {
  allowedArias: tplCharacteristics,
  selector: "role[tpl]",
};
