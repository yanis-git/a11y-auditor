/**
 * TODO : when you use this template. do not forget to change table by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#table
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const tableRole: AriaRole = 'table';
export const tableCharacteristics: AriaCharacteristics = [

];

export const tableRoleDefinition: AriaRoleDefinition = {
    allowedArias: tableCharacteristics,
    selector: 'role[table]',
}
