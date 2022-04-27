/**
 * TODO : when you use this template. do not forget to change window by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#window
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const windowRole: AriaRole = 'window';
export const windowCharacteristics: AriaCharacteristics = [

];

export const windowRoleDefinition: AriaRoleDefinition = {
    allowedArias: windowCharacteristics,
    selector: 'role[window]',
}
