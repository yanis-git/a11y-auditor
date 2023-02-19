# A11y - Accessibility headless checker
[![Actions Status](https://github.com/yanis-git/a11y-auditor/workflows/Test/badge.svg)](https://github.com/yanis-git/a11y-auditor/actions)

### Welcome to A11Y-Auditor, the accessibility headless checker

**A11Y-Auditor** is an open-source project that aims to make the web a more accessible place for all users, regardless of their abilities. 

With A11y, you can easily audit your website for accessibility issues and ensure that it meets the WCAG (Web Content Accessibility Guidelines) standards. 
As it is a headless tool, which means it can be integrated into your existing workflows and testing frameworks seamlessly. 

Whether you're a developer, designer, or accessibility advocate, A11y is the perfect tool to help you create more inclusive and accessible web experiences. 

Let's dive into the world of accessibility and make the web a more inclusive place together.

### Disclaimer and Limitation

As the maintainer of this open source project, I want to be transparent about a potential limitation of A11Y-Auditor. While A11Y-Auditor is a powerful tool that can detect many accessibility issues, it is not perfect, and there may be false negatives.

False negatives can occur when A11Y-Auditor fails to identify an accessibility issue that exists on a web page. This can happen for a variety of reasons, such as:

 - Present tool is not able to detect an issue that requires manual testing or human interpretation.
 - Present tool relies on heuristics to detect certain accessibility issues, and these heuristics may not be accurate in all cases.
 - Present tool is limited by the accessibility testing library it uses, which may not cover all types of accessibility issues.

We strive to make this tool as accurate as possible, but we recognize that there may be false negatives. Therefore, we recommend using this tool as part of a comprehensive accessibility testing process that includes manual testing and user testing.

If you do encounter a false negative or any other issues with A11y, please let us know by [creating an issue on our GitHub repository](https://github.com/yanis-git/a11y-auditor/issues/new). We are always open to feedback and are committed to making this tool as helpful and accurate as possible for the entire community.

All Audits check is based on set of rules available on `src/rule/runners`. 

#### How to start ?

```
git clone https://github.com/yanis-git/a11y-auditor 
cd a11y-auditor
yarn
yarn build
```

#### How to use ?
```
yarn auditor --url=https://github.com/yanis-git/a11y-auditor
# OR 
node dist/auditor/main.js --url=https://github.com/yanis-git/a11y-auditor
```

#### How to quickly test ?
```
# it start a python server to mount tests folder.
npm run serve
yarn auditor --url=http://\[::\]:8000/data/structural/main/test-main-tag-is-present.html
```

---

#### What technology is used ?

On this project i'am using 
 - [node.js](https://nodejs.org/) to build and run the app.
 - [nx](https://nx.dev) to orchestrate the build and run of the app.
 - [puppeteer](https://pptr.dev/) to run the headless checker.
 - [TypeScript](https://www.typescriptlang.org/) to build the app.
 - [Angular](https://angular.io/) to build the dashboard.

---

#### Pending todo list:

- [x] Create setup
- [x] Create Folder structure
- [x] Create convenient way to provide url to analyse.
- [x] Add Identifier per criteria to have a better tracking over the time.
- [x] Create a Functional testing setup.
- [x] Add github Action to run automatic testing suite.
- [x] Create Helper Browser method.
- [x] Move to nx based setup.
- [x] Fix issue with typescript `type.d.ts` loading from browser compilation.
- [ ] Create a v0 dashboard to list result in convenient way.
- [ ] Having a identifier rule per criteria.
- [ ] Create Documentation folders to details rules.
- [ ] Includes a way to provide a list of rules to run. 
- [ ] Create a way to provide a list of rules to ignore. 

#### Thanking

 - [@EmmanuelDemey](https://github.com/EmmanuelDemey/audit) who inspired me to create this tool.
