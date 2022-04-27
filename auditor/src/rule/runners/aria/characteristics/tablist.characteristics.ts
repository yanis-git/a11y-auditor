/**
 * TODO : when you use this template. do not forget to change tablist by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#tablist
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const tablistRole: AriaRole = 'tablist';
export const tablistCharacteristics: AriaCharacteristics = [
    "aria-level",
    "aria-multiselectable",
    "aria-orientation",
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

export const tablistRoleDefinition: AriaRoleDefinition = {
    allowedArias: tablistCharacteristics,
    selector: 'role[tablist]',
}
