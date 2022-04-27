/**
 * TODO : when you use this template. do not forget to change feed by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#feed
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const feedRole: AriaRole = 'feed';
export const feedCharacteristics: AriaCharacteristics = [

];

export const feedRoleDefinition: AriaRoleDefinition = {
    allowedArias: feedCharacteristics,
    selector: 'role[feed]',
}
