/**
 * TODO : when you use this template. do not forget to change range by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#range
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const rangeRole: AriaRole = 'range';
export const rangeCharacteristics: AriaCharacteristics = [

];

export const rangeRoleDefinition: AriaRoleDefinition = {
    allowedArias: rangeCharacteristics,
    selector: 'role[range]',
}
