/**
 * TODO : when you use this template. do not forget to change dialog by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#dialog
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const dialogRole: AriaRole = 'dialog';
export const dialogCharacteristics: AriaCharacteristics = [

];

export const dialogRoleDefinition: AriaRoleDefinition = {
    allowedArias: dialogCharacteristics,
    selector: 'role[dialog]',
}
