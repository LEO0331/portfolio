import {caseOverviews,caseTechnicalDetails} from '../../src/data/govtechCaseSummaries';
import {govtechCopy} from '../../src/data/govtechCopy';
import {projects} from '../../src/data/projects';
import {getLocalizedProjects} from '../../src/utils/projectLocalization';
import {copy} from '../../src/i18n/copy';
import {expect,test} from '@playwright/test';
import {govtechCases} from '../../src/data/govtechCases';
import {govtechCasesZh} from '../../src/data/govtechCases.zh';
import {auditPublicRecords,isPullRequestHref,workflowPattern,visibleFields} from '../../tools/govtech-public-audit.mjs';

test('all twenty-four public case records exclude delivery workflow content and PR destinations',()=>{
  expect(auditPublicRecords({en:govtechCases,zh:govtechCasesZh})).toEqual([]);
  for(const field of visibleFields({caseOverviews,caseTechnicalDetails,govtechCopy,projects:{en:getLocalizedProjects(projects,'en'),zh:getLocalizedProjects(projects,'zh')}})) {
    expect(workflowPattern.test(field.value),field.path).toBe(false);
    expect(isPullRequestHref(field.value),field.path).toBe(false);
  }
});
for(const [locale,records]of [['en',govtechCases],['zh',govtechCasesZh]]as const)for(const study of records){
  test(`${study.displayNumber} ${locale} presents useful results before optional technical identities`,async({page})=>{
    await page.goto(`./${locale==='zh'?'zh/':''}govtech/${study.slug}`);
    await expect(page.locator('h1')).toHaveText(study.title);
    const main=page.getByRole('main');
    expect(workflowPattern.test(await main.innerText())).toBe(false);
    expect(await main.innerText()).not.toMatch(/\b[a-f0-9]{40,64}\b/i);
    const hrefs=await main.locator('a[href]').evaluateAll(links=>links.map(a=>(a as HTMLAnchorElement).getAttribute('href')!));
    expect(hrefs.filter(href=>isPullRequestHref(href))).toEqual([]);
    const overview=page.getByRole('region',{name:locale==='en'?'Case at a glance':'案例重點'});
    await expect(overview).toBeVisible();
    await expect(overview.locator('dt')).toHaveCount(4);
    for(const summaries of Object.values(caseTechnicalDetails[locale][study.id].summaries))for(const summary of Object.values(summaries))await expect(page.getByText(summary,{exact:true})).toBeVisible();
    const review=page.locator('details[data-technical]').filter({has:page.getByText(locale==='en'?'Evidence context':'證據補充說明',{exact:true})});
    await expect(review).not.toHaveAttribute('open');
    await review.locator('summary').focus();await page.keyboard.press('Enter');
    await expect(review.locator('p')).toBeVisible();await expect(review.locator('p')).toHaveText(study.reviewNote);
    await page.keyboard.press('Enter');
    const source=page.locator('details[data-source-identifiers]');
    await expect(source).not.toHaveAttribute('open');
    const summary=source.locator('summary');await summary.focus();await page.keyboard.press('Enter');
    await expect(source).toHaveAttribute('open','');await expect(source).toContainText(study.sourceVersion);
    expect(await main.locator('a[href*="/blob/"]').count()).toBeGreaterThan(0);
    await expect(page.locator('#methodology, #tiers, #identity, #sources').first()).toBeAttached();
  });
}

for (const locale of ['en', 'zh'] as const) {
  test(`${locale} landing and every case-linked project drawer exclude workflow content and PR links`, async ({ page }) => {
    const prefix = locale === 'zh' ? 'zh/' : '';
    const inspect = async (container: import('@playwright/test').Locator) => {
      expect(workflowPattern.test(await container.innerText())).toBe(false);
      const hrefs = await container.locator('a[href]').evaluateAll(links => links.map(link => link.getAttribute('href')!));
      expect(hrefs.filter(href => isPullRequestHref(href))).toEqual([]);
    };
    await page.goto(`./${prefix}`);
    const description=copy[locale].home.govtechDescription;
    expect(description).toContain('12');
    await expect(page.getByText(description,{exact:true})).toBeVisible();
    await page.goto(`./${prefix}govtech`);
    await expect(page.locator('button[data-theme-toggle]').filter({visible:true})).toHaveText(locale==='en'?/^(Dark|Light)$/:/^(深色|淺色)$/);
    await expect(page.locator('section[aria-labelledby="govtech-cases"] article')).toHaveCount(12);
    await inspect(page.getByRole('main'));
    const ids = [...new Set((locale === 'en' ? govtechCases : govtechCasesZh).map(record => record.projectId))];
    for (const projectId of ids) {
      await page.goto(`./${prefix}projects?project=${projectId}`);
      const drawer = page.getByRole('dialog');
      await expect(drawer).toBeVisible();
      await inspect(drawer);
    }
  });

  test(`${locale} lower case card resets scroll and focuses the case heading`, async ({ page }) => {
    const study = (locale === 'en' ? govtechCases : govtechCasesZh)[8];
    const prefix = locale === 'zh' ? 'zh/' : '';
    await page.goto(`./${prefix}govtech`);
    const link = page.locator(`section[aria-labelledby="govtech-cases"] a[href$="/govtech/${study.slug}"]`);
    await link.scrollIntoViewIfNeeded();
    expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(100);
    await link.click();
    const heading = page.getByRole('heading', { level: 1, name: study.title, exact: true });
    await expect(heading).toBeFocused();
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(5);
  });
}
