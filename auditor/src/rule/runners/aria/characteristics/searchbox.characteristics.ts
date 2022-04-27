/**
 * TODO : when you use this template. do not forget to change searchbox by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#searchbox
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const searchboxRole: AriaRole = 'searchbox';
export const searchboxCharacteristics: AriaCharacteristics = [

];

export const searchboxRoleDefinition: AriaRoleDefinition = {
    allowedArias: searchboxCharacteristics,
    selector: 'role[searchbox]',
}
