/**
 * TODO : when you use this template. do not forget to change tablist by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#tablist
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const tablistRole: AriaRole = 'tablist';
export const tablistCharacteristics: AriaCharacteristics = [

];

export const tablistRoleDefinition: AriaRoleDefinition = {
    allowedArias: tablistCharacteristics,
    selector: 'role[tablist]',
}
