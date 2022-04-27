/**
 * TODO : when you use this template. do not forget to change cell by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#cell
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const cellRole: AriaRole = 'cell';
export const cellCharacteristics: AriaCharacteristics = [

];

export const cellRoleDefinition: AriaRoleDefinition = {
    allowedArias: cellCharacteristics,
    selector: 'role[cell]',
}
