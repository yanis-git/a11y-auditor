/**
 * TODO : when you use this template. do not forget to change tooltip by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#tooltip
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const tooltipRole: AriaRole = 'tooltip';
export const tooltipCharacteristics: AriaCharacteristics = [

];

export const tooltipRoleDefinition: AriaRoleDefinition = {
    allowedArias: tooltipCharacteristics,
    selector: 'role[tooltip]',
}
