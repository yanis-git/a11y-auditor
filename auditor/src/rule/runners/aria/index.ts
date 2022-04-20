import {Runner} from '../../index';
import {isAriaRolesAreSupported} from './isAriaRolesAreSupported.checker';

export const ariaRunners: Runner[] = [
    isAriaRolesAreSupported
];
