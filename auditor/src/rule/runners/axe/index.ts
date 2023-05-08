import { Runner } from "../../index";
import { performAxeAudit } from "./performAxeAudit.checker";

export const axeRunners: Runner[] = [performAxeAudit];
