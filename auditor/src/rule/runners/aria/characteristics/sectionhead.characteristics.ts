/**
 * TODO : when you use this template. do not forget to change sectionhead by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#sectionhead
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const sectionheadRole: AriaRole = 'sectionhead';
export const sectionheadCharacteristics: AriaCharacteristics = [

];

export const sectionheadRoleDefinition: AriaRoleDefinition = {
    allowedArias: sectionheadCharacteristics,
    selector: 'role[sectionhead]',
}
