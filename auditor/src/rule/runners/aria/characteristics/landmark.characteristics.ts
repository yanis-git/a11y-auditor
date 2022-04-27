/**
 * TODO : when you use this template. do not forget to change landmark by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#landmark
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const landmarkRole: AriaRole = 'landmark';
export const landmarkCharacteristics: AriaCharacteristics = [

];

export const landmarkRoleDefinition: AriaRoleDefinition = {
    allowedArias: landmarkCharacteristics,
    selector: 'role[landmark]',
}
