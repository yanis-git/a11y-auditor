import {Page} from 'puppeteer';
import {getPageWithContent} from '../../helper/page-result.mock';
import {RuleResult} from '../../../src/auditor/rule/results/rule-result';
import {isNavIsPresent} from '../../../src/auditor/rule/runners/structural/isNavIsPresent.checker';

describe('Navigation Landmark', function () {
    it.each`
    template
    ${'tests/data/structural/navigation/test-multiple-nav-is-present.html'}
    ${'tests/data/structural/navigation/test-nav-role-is-present.html'}
    ${'tests/data/structural/navigation/test-nav-tag-is-present.html'}
    `('is should return success when navigation landmark is present at least once on the DOM', (state: {template: string}) => {
            return (async () => {
                const page: Page = await getPageWithContent(state.template);
                const result: RuleResult = await isNavIsPresent(page);
                expect(result.isSuccess()).toBe(true);
                expect(result.getHints()).toEqual([]);
            })();
        });

    it('is should return error when no navigation landmark is on the DOM', () => {
        return (async () => {
            const page: Page = await getPageWithContent('tests/data/structural/navigation/test-no-nav-element-is-present.html');
            const result: RuleResult = await isNavIsPresent(page);
            expect(result.isError()).toBe(true);
            expect(result.getHints()).toEqual(['Primary navigation landmark is missing']);
        })();
    });
});