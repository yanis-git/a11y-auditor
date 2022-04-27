/**
 * TODO : when you use this template. do not forget to change treegrid by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#treegrid
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const treegridRole: AriaRole = 'treegrid';
export const treegridCharacteristics: AriaCharacteristics = [
    "aria-activedescendant",
    "aria-atomic",
    "aria-busy",
    "aria-colcount",
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
    "aria-level",
    "aria-live",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowcount"
];

export const treegridRoleDefinition: AriaRoleDefinition = {
    allowedArias: treegridCharacteristics,
    selector: 'role[treegrid]',
}
