<p align="center">
  <a href="https://astel.vercel.app">
    <img src="./src/public/logo-light.svg" height="96">
    <h3 align="center">Astel</h3>
  </a>
</p>

<h2 align="center">
 A Sleek & Minimal UI component library for Vue 3
</h2>

**Astel** is a set of accessible and composable Vue 3 components to build modern websites and applications.

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [All components](#all-components)
  - [Individual Components](#individual-components)
- [LICENSE](#license)

## Installation

```bash
yarn add @astel/ui
```

or

```bash
npm install @astel/ui
```

## Usage

### All components

**1. Import `Astel` in your `main.js` / `main.ts` file.**

```js
import { createApp } from 'vue'
import Astel from '@astel/ui'
import App from './App.vue'

createApp.use(Astel)
```

### Individual Components

```js
import { createApp } from 'vue'
import { Button, ThemeProvider } from '@astel/ui'
import App from './App.vue'

createApp.use(ThemeProvider).use(Button)
```

**2. Wrap your application inside the Astel `ThemeProvider`.**

_In your `App.vue` or the root `.vue` file._

```html
<template>
  <as-theme-provider>
    <!--
      Your application code goes here! 😁
    -->
  </as-theme-provider>
</template>
```

## LICENSE

[MIT](./LICENSE)
