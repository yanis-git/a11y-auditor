/**
 * TODO : when you use this template. do not forget to change slider by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#slider
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const sliderRole: AriaRole = 'slider';
export const sliderCharacteristics: AriaCharacteristics = [
    "aria-orientation",
    "aria-readonly",
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
    "aria-roledescription",
    "aria-valuetext"
];

export const sliderRoleDefinition: AriaRoleDefinition = {
    allowedArias: sliderCharacteristics,
    selector: 'role[slider]',
}
