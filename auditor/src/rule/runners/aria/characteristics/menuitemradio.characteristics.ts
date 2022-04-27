/**
 * TODO : when you use this template. do not forget to change menuitemradio by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#menuitemradio
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const menuitemradioRole: AriaRole = 'menuitemradio';
export const menuitemradioCharacteristics: AriaCharacteristics = [

];

export const menuitemradioRoleDefinition: AriaRoleDefinition = {
    allowedArias: menuitemradioCharacteristics,
    selector: 'role[menuitemradio]',
}
