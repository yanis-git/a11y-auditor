/**
 * TODO : when you use this template. do not forget to change toolbar by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#toolbar
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const toolbarRole: AriaRole = 'toolbar';
export const toolbarCharacteristics: AriaCharacteristics = [

];

export const toolbarRoleDefinition: AriaRoleDefinition = {
    allowedArias: toolbarCharacteristics,
    selector: 'role[toolbar]',
}
