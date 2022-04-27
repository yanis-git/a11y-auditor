/**
 * TODO : when you use this template. do not forget to change columnheader by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#columnheader
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const columnheaderRole: AriaRole = 'columnheader';
export const columnheaderCharacteristics: AriaCharacteristics = [

];

export const columnheaderRoleDefinition: AriaRoleDefinition = {
    allowedArias: columnheaderCharacteristics,
    selector: 'role[columnheader]',
}
