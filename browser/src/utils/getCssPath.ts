/**
 * Function come from https://stackoverflow.com/a/66143123/9483405
 * @param element
 */
export function getDomElementPath(element: HTMLElement): string[] {
  const stack = [];
  while (element.parentNode !== null) {
    let sibCount = 0;
    let sibIndex = 0;
    for (let i = 0; i < element.parentNode.childNodes.length; i += 1) {
      const sib = element.parentNode.childNodes[i];
      if (sib.nodeName === element.nodeName) {
        if (sib === element) {
          sibIndex = sibCount;
          break;
        }
        sibCount += 1;
      }
    }
    const nodeName = CSS.escape(element.nodeName.toLowerCase());

    // Ignore `html` as a parent node
    if (nodeName === "html") break;

    if (element.hasAttribute("id") && element.id !== "") {
      stack.unshift(`#${CSS.escape(element.id)}`);
      // Remove this `break` if you want the entire path
      break;
    } else if (sibIndex > 0) {
      // :nth-of-type is 1-indexed
      stack.unshift(`${nodeName}:nth-of-type(${sibIndex + 1})`);
    } else {
      stack.unshift(
        element.hasAttribute("role")
          ? `${nodeName}[role="${element.getAttribute("role")}"]`
          : nodeName
      );
    }
    element = element.parentNode as HTMLElement;
  }
  return stack;
}

export function getCssPath(element: HTMLElement): string {
  return getDomElementPath(element).join(" > ");
}
