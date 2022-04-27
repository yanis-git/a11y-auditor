/**
 * TODO : when you use this template. do not forget to change row by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#row
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const rowRole: AriaRole = 'row';
export const rowCharacteristics: AriaCharacteristics = [
    "aria-colindex",
    "aria-level",
    "aria-rowindex",
    "aria-selected",
    "aria-activedescendant",
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

export const rowRoleDefinition: AriaRoleDefinition = {
    allowedArias: rowCharacteristics,
    selector: 'tr, role[row]',
}
