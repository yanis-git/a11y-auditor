import {RuleStatus} from './constant';

export class RuleResult {
    constructor(
        private name: string,
        private description: string,
        private selectors: string[],
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

    getSelectors(): string[] {
        return this.selectors;
    }

    toJson(): {name:string, status: string, description: string, hints: string[]} {
        return {
            name: this.name,
            status: this.status,
            description: this.description,
            hints: this.selectors
        }
    }
}
