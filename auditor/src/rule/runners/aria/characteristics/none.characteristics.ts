/**
 * TODO : when you use this template. do not forget to change none by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#none
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const noneRole: AriaRole = 'none';
export const noneCharacteristics: AriaCharacteristics = [

];

export const noneRoleDefinition: AriaRoleDefinition = {
    allowedArias: noneCharacteristics,
    selector: 'role[none]',
}
