/**
 * TODO : when you use this template. do not forget to change figure by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#figure
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const figureRole: AriaRole = 'figure';
export const figureCharacteristics: AriaCharacteristics = [

];

export const figureRoleDefinition: AriaRoleDefinition = {
    allowedArias: figureCharacteristics,
    selector: 'role[figure]',
}
