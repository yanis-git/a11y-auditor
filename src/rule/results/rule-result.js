"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleResult = void 0;
class RuleResult {
    constructor(name, description, links, isAutomaticallyDetectable) {
        this.name = name;
        this.description = description;
        this.links = links;
        this.isAutomaticalyDetectable = isAutomaticallyDetectable;
    }
    static createRecommandation(name, description, links = []) {
        return new RuleResult(name, description, links, false);
    }
}
exports.RuleResult = RuleResult;
