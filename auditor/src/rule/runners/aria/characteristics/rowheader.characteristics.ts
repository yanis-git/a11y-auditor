/**
 * TODO : when you use this template. do not forget to change rowheader by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#rowheader
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const rowheaderRole: AriaRole = 'rowheader';
export const rowheaderCharacteristics: AriaCharacteristics = [

];

export const rowheaderRoleDefinition: AriaRoleDefinition = {
    allowedArias: rowheaderCharacteristics,
    selector: 'role[rowheader]',
}
