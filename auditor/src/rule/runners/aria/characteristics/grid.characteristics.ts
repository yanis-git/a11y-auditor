/**
 * TODO : when you use this template. do not forget to change grid by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#grid
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const gridRole: AriaRole = 'grid';
export const gridCharacteristics: AriaCharacteristics = [

];

export const gridRoleDefinition: AriaRoleDefinition = {
    allowedArias: gridCharacteristics,
    selector: 'role[grid]',
}
