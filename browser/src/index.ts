import { isVisibleForScreenReader } from "./helper/visibility/isVisible";
import {
  checkAttribute,
  checkCssProperty,
  hasHiddenParent,
} from "./utils/checkAttribute";
import { getCssPath } from "./utils/getCssPath";

export const helper = {
  isVisibleForScreenReader,
  checkCssProperty,
  checkAttribute,
  hasHiddenParent,
  getCssPath,
};
