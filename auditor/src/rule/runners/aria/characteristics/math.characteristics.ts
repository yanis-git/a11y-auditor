/**
 * TODO : when you use this template. do not forget to change math by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#math
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const mathRole: AriaRole = 'math';
export const mathCharacteristics: AriaCharacteristics = [

];

export const mathRoleDefinition: AriaRoleDefinition = {
    allowedArias: mathCharacteristics,
    selector: 'role[math]',
}
