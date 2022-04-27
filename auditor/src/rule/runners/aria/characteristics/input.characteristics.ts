/**
 * TODO : when you use this template. do not forget to change input by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#input
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const inputRole: AriaRole = 'input';
export const inputCharacteristics: AriaCharacteristics = [

];

export const inputRoleDefinition: AriaRoleDefinition = {
    allowedArias: inputCharacteristics,
    selector: 'role[input]',
}
