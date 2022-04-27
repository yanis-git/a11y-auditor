/**
 * TODO : when you use this template. do not forget to change listitem by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#listitem
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const listitemRole: AriaRole = 'listitem';
export const listitemCharacteristics: AriaCharacteristics = [

];

export const listitemRoleDefinition: AriaRoleDefinition = {
    allowedArias: listitemCharacteristics,
    selector: 'role[listitem]',
}
