/**
 * TODO : when you use this template. do not forget to change progressbar by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#progressbar
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const progressbarRole: AriaRole = 'progressbar';
export const progressbarCharacteristics: AriaCharacteristics = [

];

export const progressbarRoleDefinition: AriaRoleDefinition = {
    allowedArias: progressbarCharacteristics,
    selector: 'role[progressbar]',
}
