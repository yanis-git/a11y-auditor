/**
 * TODO : when you use this template. do not forget to change menubar by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#menubar
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const menubarRole: AriaRole = 'menubar';
export const menubarCharacteristics: AriaCharacteristics = [

];

export const menubarRoleDefinition: AriaRoleDefinition = {
    allowedArias: menubarCharacteristics,
    selector: 'role[menubar]',
}
