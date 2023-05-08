import { Runner } from "../../index";
import { isAriaRolesAreSupported } from "./isAriaRolesAreSupported.checker";
import { Aria } from "./characteristics";
import { Page } from "puppeteer";

export const ariaRunners: Runner[] = [
  ...Object.keys(Aria).map(
    (role) => (page: Page) =>
      isAriaRolesAreSupported({ [role]: Aria[role] }, page)
  ),
];
