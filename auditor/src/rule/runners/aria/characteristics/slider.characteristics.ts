/**
 * TODO : when you use this template. do not forget to change slider by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#slider
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const sliderRole: AriaRole = 'slider';
export const sliderCharacteristics: AriaCharacteristics = [

];

export const sliderRoleDefinition: AriaRoleDefinition = {
    allowedArias: sliderCharacteristics,
    selector: 'role[slider]',
}
