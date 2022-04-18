export function checkAttribute(element: HTMLElement, attribute: string, expectedValue: string = 'true'): boolean {
    return (element.hasAttribute(attribute) && element.getAttribute(attribute) === expectedValue);
}

export function checkCssProperty(element: HTMLElement, property: string, expectedValue: string): boolean {
    // @ts-ignore
    return (element.style[property] === expectedValue);
}


export function hasHiddenParent(element: HTMLElement): boolean {
    let parent = element;
    while (parent && parent.nodeName !== 'BODY') {
        if (checkAttribute(parent, 'aria-hidden', 'true')) {
            return true;
        }
        // @ts-ignore
        parent = parent.parentElement;
    }
    return false;
}
