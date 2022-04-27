/**
 * TODO : when you use this template. do not forget to change tree by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#tree
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const treeRole: AriaRole = 'tree';
export const treeCharacteristics: AriaCharacteristics = [

];

export const treeRoleDefinition: AriaRoleDefinition = {
    allowedArias: treeCharacteristics,
    selector: 'role[tree]',
}
