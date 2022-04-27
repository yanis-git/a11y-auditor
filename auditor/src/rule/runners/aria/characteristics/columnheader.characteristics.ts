/**
 * TODO : when you use this template. do not forget to change columnheader by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#columnheader
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const columnheaderRole: AriaRole = 'columnheader';
export const columnheaderCharacteristics: AriaCharacteristics = [
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
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowindex",
    "aria-rowspan",
    "aria-selected"
];

export const columnheaderRoleDefinition: AriaRoleDefinition = {
    allowedArias: columnheaderCharacteristics,
    selector: 'role[columnheader]',
}
