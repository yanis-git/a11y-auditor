/**
 * TODO : when you use this template. do not forget to change combobox by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#combobox
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const comboboxRole: AriaRole = 'combobox';
export const comboboxCharacteristics: AriaCharacteristics = [

];

export const comboboxRoleDefinition: AriaRoleDefinition = {
    allowedArias: comboboxCharacteristics,
    selector: 'role[combobox]',
}
