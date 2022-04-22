/**
 * @source https://www.w3.org/TR/wai-aria-1.1/#header
 */
import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const headerRole: AriaRole = 'header';
export const headerCharacteristics: AriaCharacteristics = [
    'aria-atomic',
    'aria-busy',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-details',
    'aria-disabled',
    'aria-dropeffect',
    'aria-errormessage',
    'aria-expanded',
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
    'aria-roledescription',
    'aria-level'
];

export const headerRoleDefinition: AriaRoleDefinition = {
    allowedArias: headerCharacteristics,
    selector: 'h1, h2, h3, h4, h5, h6, role[header]',
}
