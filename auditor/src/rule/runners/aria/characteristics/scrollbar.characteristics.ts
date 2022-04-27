/**
 * TODO : when you use this template. do not forget to change scrollbar by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#scrollbar
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const scrollbarRole: AriaRole = 'scrollbar';
export const scrollbarCharacteristics: AriaCharacteristics = [
    "aria-atomic",
    "aria-busy",
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
    "aria-valuetext"
];

export const scrollbarRoleDefinition: AriaRoleDefinition = {
    allowedArias: scrollbarCharacteristics,
    selector: 'role[scrollbar]',
}
