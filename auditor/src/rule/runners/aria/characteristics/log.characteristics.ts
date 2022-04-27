/**
 * TODO : when you use this template. do not forget to change log by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#log
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const logRole: AriaRole = 'log';
export const logCharacteristics: AriaCharacteristics = [
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

export const logRoleDefinition: AriaRoleDefinition = {
    allowedArias: logCharacteristics,
    selector: 'role[log]',
}
