import {RuleStatus} from './constant';

export class RuleResult {
    constructor(
        private name: string,
        private description: string,
        private hints: string[],
        private sources: string[],
        private status: RuleStatus,
    ) { }

    static createRecommandation(name: string, description: string, hints: string[] = [], sources: string[] = [], status: RuleStatus): RuleResult {
        return new RuleResult(name, description, hints, sources, status);
    }

    static createSuccessRecommandation(name: string, description: string): RuleResult {
        return RuleResult.createRecommandation(name, description, [], [], RuleStatus.SUCCESS);
    }

    static createErrorRecommandation(name: string, description: string, hints: string[] = [], sources: string[] = []): RuleResult {
        return RuleResult.createRecommandation(name, description, hints, sources, RuleStatus.ERROR);
    }

    isError(): boolean {
        return this.status === RuleStatus.ERROR;
    }

    isSuccess(): boolean {
        return this.status === RuleStatus.SUCCESS;
    }

    getHints(): string[] {
        return this.hints;
    }
}
