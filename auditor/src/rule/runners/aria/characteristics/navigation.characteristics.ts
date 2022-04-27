/**
 * TODO : when you use this template. do not forget to change navigation by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#navigation
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const navigationRole: AriaRole = 'navigation';
export const navigationCharacteristics: AriaCharacteristics = [

];

export const navigationRoleDefinition: AriaRoleDefinition = {
    allowedArias: navigationCharacteristics,
    selector: 'role[navigation]',
}
