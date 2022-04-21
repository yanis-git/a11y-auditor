import {AriaRoles} from './type';
import {linkRole, linkRoleDefinition} from './link.characteristics';
import {buttonRole, buttonRoleDefinition} from './button.characteristics';
import {alertRole, alertRoleDefinition} from './alert.characteristics';
import {alertdialogRole, alertdialogRoleDefinition} from './alertdialog.characteristics';
import {articleRole, articleRoleDefinition} from './article.characteristics';

/**
 * @source https://www.w3.org/TR/wai-aria-1.1/#namefromcontent
 */
export const Aria: AriaRoles = {
    [linkRole]: linkRoleDefinition,
    [buttonRole]: buttonRoleDefinition,
    [alertRole]: alertRoleDefinition,
    [alertdialogRole]: alertdialogRoleDefinition,
    [articleRole]: articleRoleDefinition
};
