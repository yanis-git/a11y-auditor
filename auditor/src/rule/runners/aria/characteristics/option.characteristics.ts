/**
 * TODO : when you use this template. do not forget to change option by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#option
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const optionRole: AriaRole = 'option';
export const optionCharacteristics: AriaCharacteristics = [

];

export const optionRoleDefinition: AriaRoleDefinition = {
    allowedArias: optionCharacteristics,
    selector: 'role[option]',
}
