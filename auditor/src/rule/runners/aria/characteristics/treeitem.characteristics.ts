/**
 * TODO : when you use this template. do not forget to change treeitem by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#treeitem
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const treeitemRole: AriaRole = 'treeitem';
export const treeitemCharacteristics: AriaCharacteristics = [

];

export const treeitemRoleDefinition: AriaRoleDefinition = {
    allowedArias: treeitemCharacteristics,
    selector: 'role[treeitem]',
}
