/**
 * TODO : when you use this template. do not forget to change group by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#group
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const groupRole: AriaRole = 'group';
export const groupCharacteristics: AriaCharacteristics = [

];

export const groupRoleDefinition: AriaRoleDefinition = {
    allowedArias: groupCharacteristics,
    selector: 'role[group]',
}
