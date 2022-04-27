/**
 * TODO : when you use this template. do not forget to change section by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#section
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const sectionRole: AriaRole = 'section';
export const sectionCharacteristics: AriaCharacteristics = [
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

export const sectionRoleDefinition: AriaRoleDefinition = {
    allowedArias: sectionCharacteristics,
    selector: 'section, role[section]',
}
