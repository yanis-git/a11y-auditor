/**
 * TODO : when you use this template. do not forget to change note by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#note
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const noteRole: AriaRole = 'note';
export const noteCharacteristics: AriaCharacteristics = [

];

export const noteRoleDefinition: AriaRoleDefinition = {
    allowedArias: noteCharacteristics,
    selector: 'role[note]',
}
