import {Page} from 'puppeteer';
import {getPageWithContent} from '../../helper/page-result.mock';
import {RuleResult} from '../../../src/rule/results/rule-result';
import {
    isDescribedByIsReferToValidElement
} from '../../../src/rule/runners/describer/isDescribedByIsReferToValidElement.checker';

describe('describer', function () {
    it('should return success when all describer are well mapped.', () => {
        return (async () => {
            const page: Page = await getPageWithContent('tests/data/describer/test-describer-is-valid.html');
            const result: RuleResult = await isDescribedByIsReferToValidElement(page);
            expect(result.isSuccess()).toBe(true);
        })();
    });


    it('should return error when at least, one iframe present do not have title', () => {
        return (async () => {
            const page: Page = await getPageWithContent('tests/data/describer/test-describer-is-invalid.html');
            const result: RuleResult = await isDescribedByIsReferToValidElement(page);
            expect(result.getHints().length).toBe(5);
            expect(result.isError()).toBe(true);
        })();
    });
});
