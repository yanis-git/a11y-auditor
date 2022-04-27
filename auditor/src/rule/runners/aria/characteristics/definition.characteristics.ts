/**
 * TODO : when you use this template. do not forget to change definition by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#definition
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const definitionRole: AriaRole = 'definition';
export const definitionCharacteristics: AriaCharacteristics = [

];

export const definitionRoleDefinition: AriaRoleDefinition = {
    allowedArias: definitionCharacteristics,
    selector: 'role[definition]',
}
