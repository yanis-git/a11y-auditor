/**
 * TODO : when you use this template. do not forget to change log by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#log
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const logRole: AriaRole = 'log';
export const logCharacteristics: AriaCharacteristics = [

];

export const logRoleDefinition: AriaRoleDefinition = {
    allowedArias: logCharacteristics,
    selector: 'role[log]',
}
