/**
 * TODO : when you use this template. do not forget to change textbox by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#textbox
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const textboxRole: AriaRole = 'textbox';
export const textboxCharacteristics: AriaCharacteristics = [
    "aria-activedescendant",
    "aria-autocomplete",
    "aria-multiline",
    "aria-placeholder",
    "aria-readonly",
    "aria-required",
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

export const textboxRoleDefinition: AriaRoleDefinition = {
    allowedArias: textboxCharacteristics,
    selector: 'role[textbox]',
}
