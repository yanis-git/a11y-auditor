/**
 * TODO : when you use this template. do not forget to change treegrid by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#treegrid
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const treegridRole: AriaRole = 'treegrid';
export const treegridCharacteristics: AriaCharacteristics = [

];

export const treegridRoleDefinition: AriaRoleDefinition = {
    allowedArias: treegridCharacteristics,
    selector: 'role[treegrid]',
}
