import {Runner} from '../../index';
import {isMainTagIsPresent} from './isMainTagIsPresent.checker';


export const structuralRunners: Runner[] = [
  isMainTagIsPresent
];
