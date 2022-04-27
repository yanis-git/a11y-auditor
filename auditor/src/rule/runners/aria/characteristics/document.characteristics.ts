/**
 * TODO : when you use this template. do not forget to change document by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#document
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const documentRole: AriaRole = 'document';
export const documentCharacteristics: AriaCharacteristics = [

];

export const documentRoleDefinition: AriaRoleDefinition = {
    allowedArias: documentCharacteristics,
    selector: 'role[document]',
}
