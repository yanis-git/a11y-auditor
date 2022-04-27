/**
 * TODO : when you use this template. do not forget to change region by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#region
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const regionRole: AriaRole = 'region';
export const regionCharacteristics: AriaCharacteristics = [

];

export const regionRoleDefinition: AriaRoleDefinition = {
    allowedArias: regionCharacteristics,
    selector: 'role[region]',
}
