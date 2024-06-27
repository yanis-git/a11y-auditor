import { checkAttribute, checkCssProperty } from "../../utils/checkAttribute";

const hiddenCases: { attribute: string; expectedValue: string }[] = [
  { attribute: "hidden", expectedValue: "" },
  { attribute: "aria-hidden", expectedValue: "true" },
];

const hiddenCssProperties: { property: string; expectedValue: string }[] = [
  { property: "display", expectedValue: "none" },
  { property: "visibility", expectedValue: "hidden" },
];

export function isVisibleForScreenReader(element?: HTMLElement): boolean {
  let isVisible = true;
  // check if element is defined.
  if (element === null || element === undefined) return false;
  // check each hidden attribute
  hiddenCases.forEach((hiddenCase) => {
    if (
      checkAttribute(element, hiddenCase.attribute, hiddenCase.expectedValue)
    ) {
      isVisible = false;
      return false;
    }
  });
  if (!isVisible) return false;
  // check if element is visible
  hiddenCssProperties.forEach((hiddenCssProperty) => {
    if (
      checkCssProperty(
        element,
        hiddenCssProperty.property,
        hiddenCssProperty.expectedValue,
      )
    ) {
      isVisible = false;
      return false;
    }
  });
  if (!isVisible) return false;

  return true;
}
