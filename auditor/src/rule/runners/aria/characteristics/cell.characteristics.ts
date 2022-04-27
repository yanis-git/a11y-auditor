/**
 * TODO : when you use this template. do not forget to change cell by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#cell
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const cellRole: AriaRole = 'cell';
export const cellCharacteristics: AriaCharacteristics = [
    "aria-colindex",
    "aria-colspan",
    "aria-rowindex",
    "aria-rowspan",
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

export const cellRoleDefinition: AriaRoleDefinition = {
    allowedArias: cellCharacteristics,
    selector: 'role[cell]',
}
