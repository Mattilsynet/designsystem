# Designsystem for Mattilsynet



| css    | [![npm version](https://badge.fury.io/js/@mattilsynet%2Fdesignsystem-css.svg)](https://badge.fury.io/js/@mattilsynet%2Fdesignsystem-css)       | [![Publish css package](https://github.com/Mattilsynet/designsystem/actions/workflows/publish.css.yml/badge.svg)](https://github.com/Mattilsynet/designsystem/actions/workflows/publish.css.yml)          |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| svelte | [![npm version](https://badge.fury.io/js/@mattilsynet%2Fdesignsystem-svelte.svg)](https://badge.fury.io/js/@mattilsynet%2Fdesignsystem-svelte) | [![Publish svelte package](https://github.com/Mattilsynet/designsystem/actions/workflows/publish.svelte.yml/badge.svg)](https://github.com/Mattilsynet/designsystem/actions/workflows/publish.svelte.yml) |
| react  | [![npm version](https://badge.fury.io/js/@mattilsynet%2Fdesignsystem-react.svg)](https://badge.fury.io/js/@mattilsynet%2Fdesignsystem-react)   | [![Publish react package](https://github.com/Mattilsynet/designsystem/actions/workflows/publish.react.yml/badge.svg)](https://github.com/Mattilsynet/designsystem/actions/workflows/publish.react.yml)    |

## Opening in storybook

When you have cloned this repo to your computer, you can run the following commands, to view the project in 
[StorybookJS](https://storybook.js.org/).

```bash
npm install
npm run storybook
// also run in other terminal to build sass
npm run start
```

## Installation and usage

Install the design system from npm into your project, you can run the following command:

```bash
npm i --save @mattilsynet/designsystem
```

## Building and deploy to npm

You can run the following command to build the scss into css files, and deploy package to npm:

```bash
npm run build
npm publish
```
