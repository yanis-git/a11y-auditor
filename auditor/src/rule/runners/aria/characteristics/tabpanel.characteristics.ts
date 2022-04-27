/**
 * TODO : when you use this template. do not forget to change tabpanel by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#tabpanel
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const tabpanelRole: AriaRole = 'tabpanel';
export const tabpanelCharacteristics: AriaCharacteristics = [

];

export const tabpanelRoleDefinition: AriaRoleDefinition = {
    allowedArias: tabpanelCharacteristics,
    selector: 'role[tabpanel]',
}
