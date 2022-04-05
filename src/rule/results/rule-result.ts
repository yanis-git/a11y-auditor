export type RuleStatus = 'success' | 'warning' | 'error';

export class RuleResult {
    constructor(
        private name: string,
        private description: string,
        private hints: string[],
        private links: string[],
        private status: RuleStatus,
    ) { }

    static createRecommandation(name: string, description: string, hints: string[] = [], links: string[] = [], status: RuleStatus): RuleResult {
        return new RuleResult(name, description, hints, links, status);
    }

    static createSuccessRecommandation(name: string, description: string): RuleResult {
        return RuleResult.createRecommandation(name, description, [], [], 'success');
    }

    static createErrorRecommandation(name: string, description: string, hints: string[] = [], links: string[] = []): RuleResult {
        return RuleResult.createRecommandation(name, description, hints, links, 'error');
    }
}
