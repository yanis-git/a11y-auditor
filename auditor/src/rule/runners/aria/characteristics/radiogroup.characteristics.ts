/**
 * TODO : when you use this template. do not forget to change radiogroup by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#radiogroup
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const radiogroupRole: AriaRole = 'radiogroup';
export const radiogroupCharacteristics: AriaCharacteristics = [

];

export const radiogroupRoleDefinition: AriaRoleDefinition = {
    allowedArias: radiogroupCharacteristics,
    selector: 'role[radiogroup]',
}
