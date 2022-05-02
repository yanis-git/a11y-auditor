A11y - Accessibility headless checker
==

The a11y headless checker is a great tool for quickly checking the accessibility of your website. It's easy to use and can help you identify any potential issues that need to be addressed.

Based on set of rules available on `src/rule/runners`. 

**How to start ?**

```
git clone https://github.com/yanis-git/a11y-auditor 
cd a11y-auditor
npm install
npm run build
```

**How to use ?**
```
node dist/auditor/index.js --url=http://localhost:3000
```

**How to quickly test ?**
```
# it start a python server to mount tests folder.
npm run serve
node dist/auditor/index.js --url=http://\[::\]:8000/data/structural/main/test-main-tag-is-present.html
```

---

**What technology is used ?**

On this project i'am using 
 - [node.js](https://nodejs.org/) to build and run the app.
 - [nx](https://nx.dev) to orchestrate the build and run of the app.
 - [puppeteer](https://pptr.dev/) to run the headless checker.
 - [TypeScript](https://www.typescriptlang.org/) to build the app.
 - [Angular](https://angular.io/) to build the dashboard.

---

**Pending todo list:** 

- [x] Create setup
- [x] Create Folder structure
- [x] Create convenient way to provide url to analyse.
- [x] Add Identifier per criteria to have a better tracking over the time.
- [x] Create a Functional testing setup.
- [x] Add github Action to run automatic testing suite.
- [x] Create Helper Browser method.
- [x] Move to nx based setup.
- [ ] Fix issue with typescript `type.d.ts` loading from browser compilation.
- [ ] Create a v0 dashboard to list result in convenient way.
- [ ] Having a identifier rule per criteria.
- [ ] Create Documentation folders to details rules.
- [ ] Includes a way to provide a list of rules to run. 
- [ ] Create a way to provide a list of rules to ignore. 

**Thanking:**

 - [@EmmanuelDemey](https://github.com/EmmanuelDemey/audit) who inspired me to create this tool.
