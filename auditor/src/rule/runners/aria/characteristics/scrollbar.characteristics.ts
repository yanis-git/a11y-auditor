/**
 * TODO : when you use this template. do not forget to change scrollbar by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#scrollbar
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const scrollbarRole: AriaRole = 'scrollbar';
export const scrollbarCharacteristics: AriaCharacteristics = [

];

export const scrollbarRoleDefinition: AriaRoleDefinition = {
    allowedArias: scrollbarCharacteristics,
    selector: 'role[scrollbar]',
}
