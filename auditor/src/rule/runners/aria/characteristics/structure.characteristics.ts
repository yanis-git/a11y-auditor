/**
 * TODO : when you use this template. do not forget to change structure by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#structure
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const structureRole: AriaRole = 'structure';
export const structureCharacteristics: AriaCharacteristics = [

];

export const structureRoleDefinition: AriaRoleDefinition = {
    allowedArias: structureCharacteristics,
    selector: 'role[structure]',
}
