/**
 * TODO : when you use this template. do not forget to change listbox by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#listbox
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const listboxRole: AriaRole = 'listbox';
export const listboxCharacteristics: AriaCharacteristics = [

];

export const listboxRoleDefinition: AriaRoleDefinition = {
    allowedArias: listboxCharacteristics,
    selector: 'role[listbox]',
}
