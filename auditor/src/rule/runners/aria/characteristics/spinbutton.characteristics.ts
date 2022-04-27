/**
 * TODO : when you use this template. do not forget to change spinbutton by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#spinbutton
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const spinbuttonRole: AriaRole = 'spinbutton';
export const spinbuttonCharacteristics: AriaCharacteristics = [

];

export const spinbuttonRoleDefinition: AriaRoleDefinition = {
    allowedArias: spinbuttonCharacteristics,
    selector: 'role[spinbutton]',
}
