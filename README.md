# To-do with React, TypeScript, SASS and Vitest using Vite

## Initial setup

To create the project with Vite run:

```bash
npm create vite@latest
```

Selected the following configurations:

- **Project name:** todo-react-ts-vitest
- **Framework:** React
- **Variant:** TypeScript

After Vite created the project we moved to the project, installed the dependencies and run the project in dev mode to test that it worked properly:

```bash
cd todo-react-ts-vitest
npm install
npm run dev
```

After the quick check, we proceeded cleaning the project of unnecessary assets and code.

After the cleanup, we configured linting tools, specifically, we will be using:

- ESLint
- ESLint for Typescript
- Prettier
- Airbnb config

For such configuration, we installed es lint as dependency and run the initializer for the setup:

```bash
npm i -D eslint
npx eslint --init
```

We chose the following configurations:

- **Install required packages:** y
- **How would you like to use ESLint?** To check syntax, find problems, and enforce code style
- **What type of modules does your project use?** JavaScript modules (import/export)
- **Which framework does your project use?** React
- **Does your project use TypeScript?** Yes
- **Where does your code run?** Browser
- **How would you like to define a style for your project?** Use a popular style guide
- **Which style guide do you want to follow?** Standard: https://github.com/standard/eslint-config-standard-with-typescript
- **What format do you want your config file to be in?** JSON
- **Would you likle to install dependencies now? (eslint-plugin-react@latest eslint-config-standard-with-typescript@latest @typescript-eslint/eslint-plugin@^5.0.0 eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 eslint-plugin-promise@^6.0.0 typescript@\*)** Yes
- **Which package manager do you want to use?** npm

This created a file `.eslintrc.json`, but at this point we are still missing some more dependencies like [Airbnb style guide](https://www.npmjs.com/package/eslint-config-airbnb), an opinionated style guide for ES6 and React, and [the TypeScript analog](https://www.npmjs.com/package/eslint-config-airbnb-typescript):

```bash
npx install-peerdeps --dev eslint-config-airbnb
npm install eslint-config-airbnb-typescript @typescript-eslint/parser@^5.0.0 --save-dev
```

Once installed, we updatede the `.eslintrc.json` config adding:

```json
"extends": ["airbnb", "airbnb-typescript", "airbnb/hooks"]
```

After this, we installed prettier plugins for ESLint, so that prettier works alongside with our defined ESLint rules:

```bash
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

After the installations, we will be creating a `.prettier.json` file with the content:

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

And added the plugin for prettier in the plugins section of the `.eslintrc.json` file:

```json
"plugins": ["react", "prettier"],
```

With prettier ready, our next step was to add vitest:

```bash
npm i -D vitest
```

And we change the `vite.config.ts` file with:

```typescript
/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
});
```

After that, we installed testing-library to test react specifically:

```bash
npm i -D @testing-library/react @testing-library/jest-dom
```

After that we created a the file `src/setupTests.ts` with the content:

```typescript
/* eslint-disable import/no-extraneous-dependencies */
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
```

And added the script test in `package.json`:

```json
"test": "vitest"
```

Now we are able to run tests using:

```bash
npm run test
```

Finally, we installed SASS as dependency:

```bash
npm i -D sass @types/sass
```

## Resources/References

- [Setup Youtube video by Coding Garden](https://www.youtube.com/watch?app=desktop&v=cchqeWY0Nak)
- [Using Testing Library jest-dom with Vitest](https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/)
- [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

TO CHECK:

- [todomvc](https://todomvc.com/examples/typescript-react/#/): a project to learn how to apply different libraries/frameworks to create a TO DO webapp. To take some inspiration and to learn from it.
- [todoist](https://todoist.com/es): a commercial TO DO application to take some inspiration.
- [EditorConfig](https://www.editorconfig.org/): file to keep consistent styles across the collaborators of a project, tryint to keep it across different editors.
- [Husky](https://typicode.github.io/husky/#/): a tool to trigger certain actions when commiting or pushing changes into a repository.
