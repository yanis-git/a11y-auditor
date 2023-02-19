# A11y - Accessibility headless checker

### Welcome to **A11y-Auditor**, the accessibility headless checker

**A11y-Auditor** is an open-source project that aims to make the web a more accessible place for all users, regardless of their abilities. 

With A11y, you can easily audit your website for accessibility issues and ensure that it meets the WCAG (Web Content Accessibility Guidelines) standards. 
As it is a headless tool, which means it can be integrated into your existing workflows and testing frameworks seamlessly. 

Whether you're a developer, designer, or accessibility advocate, A11y is the perfect tool to help you create more inclusive and accessible web experiences. 

Let's dive into the world of accessibility and make the web a more inclusive place together.

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
