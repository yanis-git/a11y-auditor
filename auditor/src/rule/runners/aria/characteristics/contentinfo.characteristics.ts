/**
 * TODO : when you use this template. do not forget to change contentinfo by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#contentinfo
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const contentinfoRole: AriaRole = 'contentinfo';
export const contentinfoCharacteristics: AriaCharacteristics = [
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

export const contentinfoRoleDefinition: AriaRoleDefinition = {
    allowedArias: contentinfoCharacteristics,
    selector: 'role[contentinfo]',
}
