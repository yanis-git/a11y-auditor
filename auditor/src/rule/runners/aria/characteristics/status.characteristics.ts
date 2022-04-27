/**
 * TODO : when you use this template. do not forget to change status by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#status
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const statusRole: AriaRole = 'status';
export const statusCharacteristics: AriaCharacteristics = [

];

export const statusRoleDefinition: AriaRoleDefinition = {
    allowedArias: statusCharacteristics,
    selector: 'role[status]',
}
