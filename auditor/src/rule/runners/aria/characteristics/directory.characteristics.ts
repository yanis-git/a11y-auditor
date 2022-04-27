/**
 * TODO : when you use this template. do not forget to change directory by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#directory
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const directoryRole: AriaRole = 'directory';
export const directoryCharacteristics: AriaCharacteristics = [

];

export const directoryRoleDefinition: AriaRoleDefinition = {
    allowedArias: directoryCharacteristics,
    selector: 'role[directory]',
}
