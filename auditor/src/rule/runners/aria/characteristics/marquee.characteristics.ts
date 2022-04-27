/**
 * TODO : when you use this template. do not forget to change marquee by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#marquee
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const marqueeRole: AriaRole = 'marquee';
export const marqueeCharacteristics: AriaCharacteristics = [

];

export const marqueeRoleDefinition: AriaRoleDefinition = {
    allowedArias: marqueeCharacteristics,
    selector: 'role[marquee]',
}
