/**
 * TODO : when you use this template. do not forget to change row by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#row
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const rowRole: AriaRole = 'row';
export const rowCharacteristics: AriaCharacteristics = [

];

export const rowRoleDefinition: AriaRoleDefinition = {
    allowedArias: rowCharacteristics,
    selector: 'role[row]',
}
