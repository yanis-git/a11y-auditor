/**
 * TODO : when you use this template. do not forget to change widget by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#widget
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const widgetRole: AriaRole = 'widget';
export const widgetCharacteristics: AriaCharacteristics = [

];

export const widgetRoleDefinition: AriaRoleDefinition = {
    allowedArias: widgetCharacteristics,
    selector: 'role[widget]',
}
