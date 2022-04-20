import {AriaRoles} from './type';
import {linkRole, linkRoleDefinition} from './link.characteristics';
import {buttonRole, buttonRoleDefinition} from './button.characteristics';

/**
 * @source https://www.w3.org/TR/wai-aria-1.1/#namefromcontent
 */
export const Aria: AriaRoles = {
    [linkRole]: linkRoleDefinition,
    [buttonRole]: buttonRoleDefinition,
};
