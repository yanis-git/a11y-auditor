/**
 * @source https://www.w3.org/TR/wai-aria-1.1/#alert
 */

import {AriaCharacteristics, AriaRole, AriaRoleDefinition} from './type';

export const alertRole: AriaRole = 'alert';
export const alertCharacteristics: AriaCharacteristics = [
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
];

export const alertRoleDefinition: AriaRoleDefinition = {
    allowedArias: alertCharacteristics,
    selector: '[role="alert"]',
}
