/**
 * TODO : when you use this template. do not forget to change menu by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#menu
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const menuRole: AriaRole = 'menu';
export const menuCharacteristics: AriaCharacteristics = [

];

export const menuRoleDefinition: AriaRoleDefinition = {
    allowedArias: menuCharacteristics,
    selector: 'role[menu]',
}
