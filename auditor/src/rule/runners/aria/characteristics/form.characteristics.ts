/**
 * TODO : when you use this template. do not forget to change form by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#form
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const formRole: AriaRole = 'form';
export const formCharacteristics: AriaCharacteristics = [

];

export const formRoleDefinition: AriaRoleDefinition = {
    allowedArias: formCharacteristics,
    selector: 'role[form]',
}
