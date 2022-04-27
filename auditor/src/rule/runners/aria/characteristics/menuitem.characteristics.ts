/**
 * TODO : when you use this template. do not forget to change menuitem by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#menuitem
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const menuitemRole: AriaRole = 'menuitem';
export const menuitemCharacteristics: AriaCharacteristics = [

];

export const menuitemRoleDefinition: AriaRoleDefinition = {
    allowedArias: menuitemCharacteristics,
    selector: 'role[menuitem]',
}
