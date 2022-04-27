/**
 * TODO : when you use this template. do not forget to change main by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#main
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const mainRole: AriaRole = 'main';
export const mainCharacteristics: AriaCharacteristics = [

];

export const mainRoleDefinition: AriaRoleDefinition = {
    allowedArias: mainCharacteristics,
    selector: 'role[main]',
}
