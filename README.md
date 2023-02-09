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

## Resources/References

- [Setup Youtube video by Coding Garden](https://www.youtube.com/watch?app=desktop&v=cchqeWY0Nak)
