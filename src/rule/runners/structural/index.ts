import {Runner} from '../../index';
import {isMainTagIsPresent} from './isMainTagIsPresent.checker';
import {isNavIsPresent} from './isNavIsPresent.checker';


export const structuralRunners: Runner[] = [
  isMainTagIsPresent,
  isNavIsPresent,
];
