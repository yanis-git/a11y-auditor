import {Runner} from '../../index';
import {isImagesHaveAltChecker} from './isImagesHaveAlt.checker';
import {isAltNotOverridden} from './isAltIsNotOverided.checker';

export const imageRunners: Runner[] = [
    isImagesHaveAltChecker,
    isAltNotOverridden
];
