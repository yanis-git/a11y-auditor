import {isImagesHaveAltChecker} from './isImagesHaveAlt.checker';
import {Runner} from '../../index';
import {isAltNotOverridden} from './isAltIsNotOverided.checker';

export const imageRunners: Runner[] = [
    isImagesHaveAltChecker,
    isAltNotOverridden
];
