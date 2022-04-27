/**
 * TODO : when you use this template. do not forget to change main by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#main
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const mainRole: AriaRole = 'main';
export const mainCharacteristics: AriaCharacteristics = [
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
    "aria-roledescription"
];

export const mainRoleDefinition: AriaRoleDefinition = {
    allowedArias: mainCharacteristics,
    selector: 'main, role[main]',
}
