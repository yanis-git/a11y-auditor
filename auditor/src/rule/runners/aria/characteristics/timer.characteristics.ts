/**
 * TODO : when you use this template. do not forget to change timer by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#timer
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const timerRole: AriaRole = 'timer';
export const timerCharacteristics: AriaCharacteristics = [

];

export const timerRoleDefinition: AriaRoleDefinition = {
    allowedArias: timerCharacteristics,
    selector: 'role[timer]',
}
