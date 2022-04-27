/**
 * TODO : when you use this template. do not forget to change gridcell by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#gridcell
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const gridcellRole: AriaRole = 'gridcell';
export const gridcellCharacteristics: AriaCharacteristics = [

];

export const gridcellRoleDefinition: AriaRoleDefinition = {
    allowedArias: gridcellCharacteristics,
    selector: 'role[gridcell]',
}
