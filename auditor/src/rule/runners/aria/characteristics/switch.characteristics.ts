/**
 * TODO : when you use this template. do not forget to change switch by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#switch
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const switchRole: AriaRole = 'switch';
export const switchCharacteristics: AriaCharacteristics = [

];

export const switchRoleDefinition: AriaRoleDefinition = {
    allowedArias: switchCharacteristics,
    selector: 'role[switch]',
}
