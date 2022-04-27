/**
 * TODO : when you use this template. do not forget to change command by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#command
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const commandRole: AriaRole = 'command';
export const commandCharacteristics: AriaCharacteristics = [

];

export const commandRoleDefinition: AriaRoleDefinition = {
    allowedArias: commandCharacteristics,
    selector: 'role[command]',
}
