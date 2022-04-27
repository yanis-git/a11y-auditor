/**
 * TODO : when you use this template. do not forget to change list by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#list
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const listRole: AriaRole = 'list';
export const listCharacteristics: AriaCharacteristics = [

];

export const listRoleDefinition: AriaRoleDefinition = {
    allowedArias: listCharacteristics,
    selector: 'role[list]',
}
