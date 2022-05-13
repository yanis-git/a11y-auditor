export const SUCCESS = 'success';
export const ERROR = 'error';
export const WARNING = 'warning';

export enum RuleStatus {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
};


export interface RuleSet {
    name: string;
    description: string;
    hints: string[];
    sources: string[];
    status: RuleStatus;
}
