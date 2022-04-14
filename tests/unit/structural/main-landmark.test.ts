import {Page} from 'puppeteer';
import {getPageWithContent} from '../../helper/page-result.mock';
import {RuleResult} from '../../../src/auditor/rule/results/rule-result';
import {isMainTagIsPresent} from '../../../src/auditor/rule/runners/structural/isMainTagIsPresent.checker';

describe('Main Landmark', function () {
    it.each`
    template
    ${'tests/data/structural/main/test-main-tag-is-present.html'}
    ${'tests/data/structural/main/test-main-role-is-present.html'}
    ${'tests/data/structural/main/test-multiple-main-with-hidden-role.html'}
    `('is should return success when main landmark is present once on the DOM', (state: {template: string}) => {
        return (async () => {
            const page: Page = await getPageWithContent(state.template);
            const result: RuleResult = await isMainTagIsPresent(page);
            expect(result.isSuccess()).toBe(true);
            expect(result.getHints()).toEqual([]);
        })();
    });

    it('is should return error when no main landmark is present on the DOM', () => {
        return (async () => {
            const page: Page = await getPageWithContent('tests/data/structural/main/test-main-role-is-not-present.html');
            const result: RuleResult = await isMainTagIsPresent(page);
            expect(result.isError()).toBe(true);
            expect(result.getHints()).toEqual(['Main landmark is missing']);
        })();
    });


    it('is should return error when multiple main landmarks is present on the DOM', () => {
        return (async () => {
            const page: Page = await getPageWithContent('tests/data/structural/main/test-main-role-is-duplicated.html');
            const result: RuleResult = await isMainTagIsPresent(page);
            expect(result.isError()).toBe(true);
            expect(result.getHints()).toEqual(['Main landmark is present more than once. Use hidden attributes or remove tags']);
        })();
    });
});
