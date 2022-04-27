/**
 * TODO : when you use this template. do not forget to change treeitem by role name.
 *
 * @source https://www.w3.org/TR/wai-aria-1.1/#treeitem
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const treeitemRole: AriaRole = 'treeitem';
export const treeitemCharacteristics: AriaCharacteristics = [
    "aria-atomic",
    "aria-busy",
    "aria-checked",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled",
    "aria-dropeffect",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-grabbed",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-owns",
    "aria-posinset",
    "aria-relevant",
    "aria-roledescription",
    "aria-selected",
    "aria-setsize"
];

export const treeitemRoleDefinition: AriaRoleDefinition = {
    allowedArias: treeitemCharacteristics,
    selector: 'role[treeitem]',
}
