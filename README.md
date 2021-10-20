<h1><strong>Eleventy Web Starter</strong></h1>

<em>Eleventy · HTML · (S)CSS · Javascript · crystallize Headless Pages </em>

[![Netlify Status](https://api.netlify.com/api/v1/badges/c4a310ef-93cc-4e5d-aa61-f78acfbac197/deploy-status)](https://app.netlify.com/sites/reverent-varahamihira-6dbce2/deploys)

## Contents

- [Project overview](#project-overview)
- [Getting started](#getting-started)
  - [Install dependencies](#install-dependencies)
  - [Working locally](#working-locally)
  - [Creating a production build](#creating-a-production-build)
- [Deployment](#deployment)
- [Credits](#credits)

---

## Project Overview

- The project uses [Eleventy](https://11ty.dev) as a static site generator
- Default templating is [Nunjucks](https://mozilla.github.io/nunjucks/) (can be changed)
- HTML minified in production
- CSS inlined and minified in production
- [esbuild](https://esbuild.github.io/) used to bundle and minify scripts
- Document `<head>` crafted using [htmlhead.dev](https://htmlhead.dev)
- -> missing, css purge

---

## Getting Started

### Install dependencies

```
npm install
```

### Working locally

Starts watch tasks to compile when changes detected

```
npm start
```

### Creating a production build

Minify HTML, minify JS, inline and minify CSS.

```
npm run build
```

---

## Deployment

You can host the production output on any web server or service you like and upload it via any method, it'll work.

If you don't have an existing place to host your site you should have a look at [Netlify](https://www.netlify.com). To get started you can hit the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/julianiff/colorify)

---

#### Credits

- [Eleventy](https://11ty.dev)
- [esbuild](https://esbuild.github.io/)
- [Luxon](https://moment.github.io/luxon/)
- [NPM Run All](https://www.npmjs.com/package/npm-run-all)
- [HTML Minifier](https://www.npmjs.com/package/html-minifier)
- https://eleventywebstarter.netlify.app
