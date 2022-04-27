/**
 * TODO : when you use this template. do not forget to change composite by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#composite
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const compositeRole: AriaRole = 'composite';
export const compositeCharacteristics: AriaCharacteristics = [

];

export const compositeRoleDefinition: AriaRoleDefinition = {
    allowedArias: compositeCharacteristics,
    selector: 'role[composite]',
}
