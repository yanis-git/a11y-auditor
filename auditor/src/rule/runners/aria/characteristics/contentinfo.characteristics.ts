/**
 * TODO : when you use this template. do not forget to change contentinfo by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#contentinfo
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const contentinfoRole: AriaRole = 'contentinfo';
export const contentinfoCharacteristics: AriaCharacteristics = [

];

export const contentinfoRoleDefinition: AriaRoleDefinition = {
    allowedArias: contentinfoCharacteristics,
    selector: 'role[contentinfo]',
}
