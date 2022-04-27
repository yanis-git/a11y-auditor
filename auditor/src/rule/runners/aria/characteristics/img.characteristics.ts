/**
 * TODO : when you use this template. do not forget to change img by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#img
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const imgRole: AriaRole = 'img';
export const imgCharacteristics: AriaCharacteristics = [

];

export const imgRoleDefinition: AriaRoleDefinition = {
    allowedArias: imgCharacteristics,
    selector: 'role[img]',
}
