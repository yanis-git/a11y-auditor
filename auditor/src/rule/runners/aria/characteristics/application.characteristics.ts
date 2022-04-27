/**
 * TODO : when you use this template. do not forget to change application by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#application
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const applicationRole: AriaRole = 'application';
export const applicationCharacteristics: AriaCharacteristics = [

];

export const applicationRoleDefinition: AriaRoleDefinition = {
    allowedArias: applicationCharacteristics,
    selector: 'role[application]',
}
