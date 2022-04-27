/**
 * TODO : when you use this template. do not forget to change combobox by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#combobox
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const comboboxRole: AriaRole = 'combobox';
export const comboboxCharacteristics: AriaCharacteristics = [
    "aria-autocomplete",
    "aria-readonly",
    "aria-required",
    "aria-activedescendant",
    "aria-atomic",
    "aria-busy",
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
    "aria-orientation",
    "aria-owns",
    "aria-relevant",
    "aria-roledescription"
];

export const comboboxRoleDefinition: AriaRoleDefinition = {
    allowedArias: comboboxCharacteristics,
    selector: 'role[combobox]',
}
