/**
 * TODO : when you use this template. do not forget to change separator by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#separator
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const separatorRole: AriaRole = 'separator';
export const separatorCharacteristics: AriaCharacteristics = [
    "aria-orientation",
    "aria-valuetext",
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
    "aria-roledescription"
];

export const separatorRoleDefinition: AriaRoleDefinition = {
    allowedArias: separatorCharacteristics,
    selector: 'hr,role[separator]',
}
