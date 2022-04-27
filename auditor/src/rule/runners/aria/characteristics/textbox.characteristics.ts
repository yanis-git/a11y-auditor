/**
 * TODO : when you use this template. do not forget to change textbox by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#textbox
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const textboxRole: AriaRole = 'textbox';
export const textboxCharacteristics: AriaCharacteristics = [

];

export const textboxRoleDefinition: AriaRoleDefinition = {
    allowedArias: textboxCharacteristics,
    selector: 'role[textbox]',
}
