/**
 * TODO : when you use this template. do not forget to change search by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#search
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const searchRole: AriaRole = 'search';
export const searchCharacteristics: AriaCharacteristics = [

];

export const searchRoleDefinition: AriaRoleDefinition = {
    allowedArias: searchCharacteristics,
    selector: 'role[search]',
}
