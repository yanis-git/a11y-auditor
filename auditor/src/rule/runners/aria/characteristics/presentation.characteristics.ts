/**
 * TODO : when you use this template. do not forget to change presentation by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#presentation
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const presentationRole: AriaRole = 'presentation';
export const presentationCharacteristics: AriaCharacteristics = [

];

export const presentationRoleDefinition: AriaRoleDefinition = {
    allowedArias: presentationCharacteristics,
    selector: 'role[presentation]',
}
