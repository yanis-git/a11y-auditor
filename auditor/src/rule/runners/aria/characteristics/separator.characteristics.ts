/**
 * TODO : when you use this template. do not forget to change separator by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#separator
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const separatorRole: AriaRole = 'separator';
export const separatorCharacteristics: AriaCharacteristics = [

];

export const separatorRoleDefinition: AriaRoleDefinition = {
    allowedArias: separatorCharacteristics,
    selector: 'role[separator]',
}
