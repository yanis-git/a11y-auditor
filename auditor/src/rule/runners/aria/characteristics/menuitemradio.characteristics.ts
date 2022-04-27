/**
 * TODO : when you use this template. do not forget to change menuitemradio by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#menuitemradio
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const menuitemradioRole: AriaRole = 'menuitemradio';
export const menuitemradioCharacteristics: AriaCharacteristics = [
    "aria-atomic",
    "aria-busy",
    "aria-checked",
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
    "aria-posinset",
    "aria-readonly",
    "aria-relevant",
    "aria-roledescription",
    "aria-setsize"
];

export const menuitemradioRoleDefinition: AriaRoleDefinition = {
    allowedArias: menuitemradioCharacteristics,
    selector: 'role[menuitemradio]',
}
