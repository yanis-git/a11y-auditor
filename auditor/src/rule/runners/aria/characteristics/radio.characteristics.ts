/**
 * TODO : when you use this template. do not forget to change radio by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#radio
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const radioRole: AriaRole = 'radio';
export const radioCharacteristics: AriaCharacteristics = [

];

export const radioRoleDefinition: AriaRoleDefinition = {
    allowedArias: radioCharacteristics,
    selector: 'role[radio]',
}
