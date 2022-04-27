/**
 * TODO : when you use this template. do not forget to change term by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#term
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const termRole: AriaRole = 'term';
export const termCharacteristics: AriaCharacteristics = [

];

export const termRoleDefinition: AriaRoleDefinition = {
    allowedArias: termCharacteristics,
    selector: 'role[term]',
}
