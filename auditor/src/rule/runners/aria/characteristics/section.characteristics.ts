/**
 * TODO : when you use this template. do not forget to change section by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#section
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const sectionRole: AriaRole = 'section';
export const sectionCharacteristics: AriaCharacteristics = [

];

export const sectionRoleDefinition: AriaRoleDefinition = {
    allowedArias: sectionCharacteristics,
    selector: 'role[section]',
}
