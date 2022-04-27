/**
 * TODO : when you use this template. do not forget to change roletype by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#roletype
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const roletypeRole: AriaRole = 'roletype';
export const roletypeCharacteristics: AriaCharacteristics = [

];

export const roletypeRoleDefinition: AriaRoleDefinition = {
    allowedArias: roletypeCharacteristics,
    selector: 'role[roletype]',
}
