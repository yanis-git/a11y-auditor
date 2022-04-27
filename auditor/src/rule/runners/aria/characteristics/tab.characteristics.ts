/**
 * TODO : when you use this template. do not forget to change tab by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#tab
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const tabRole: AriaRole = 'tab';
export const tabCharacteristics: AriaCharacteristics = [

];

export const tabRoleDefinition: AriaRoleDefinition = {
    allowedArias: tabCharacteristics,
    selector: 'role[tab]',
}
