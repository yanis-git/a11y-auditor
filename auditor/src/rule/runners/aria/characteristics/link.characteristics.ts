/**
 * @source https://www.w3.org/TR/wai-aria-1.1/#link
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const linkRole: AriaRole = 'link';
export const linkCharacteristics: AriaCharacteristics = [
    'aria-expanded',
    'aria-pressed',
    'aria-atomic',
    'aria-busy',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-details',
    'aria-disabled',
    'aria-dropeffect',
    'aria-errormessage',
    'aria-flowto',
    'aria-grabbed',
    'aria-haspopup',
    'aria-hidden',
    'aria-invalid',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-live',
    'aria-owns',
    'aria-relevant',
    'aria-roledescription'
];

export const linkRoleDefinition: AriaRoleDefinition = {
    allowedArias: linkCharacteristics,
    selector: 'a, role[link]'
}
