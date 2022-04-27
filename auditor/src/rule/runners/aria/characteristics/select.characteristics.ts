/**
 * TODO : when you use this template. do not forget to change select by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#select
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const selectRole: AriaRole = 'select';
export const selectCharacteristics: AriaCharacteristics = [

];

export const selectRoleDefinition: AriaRoleDefinition = {
    allowedArias: selectCharacteristics,
    selector: 'role[select]',
}
