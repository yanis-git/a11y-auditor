/**
 * TODO : when you use this template. do not forget to change rowgroup by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#rowgroup
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const rowgroupRole: AriaRole = 'rowgroup';
export const rowgroupCharacteristics: AriaCharacteristics = [

];

export const rowgroupRoleDefinition: AriaRoleDefinition = {
    allowedArias: rowgroupCharacteristics,
    selector: 'role[rowgroup]',
}
