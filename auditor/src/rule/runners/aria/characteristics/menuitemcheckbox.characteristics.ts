/**
 * TODO : when you use this template. do not forget to change menuitemcheckbox by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#menuitemcheckbox
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const menuitemcheckboxRole: AriaRole = 'menuitemcheckbox';
export const menuitemcheckboxCharacteristics: AriaCharacteristics = [

];

export const menuitemcheckboxRoleDefinition: AriaRoleDefinition = {
    allowedArias: menuitemcheckboxCharacteristics,
    selector: 'role[menuitemcheckbox]',
}
