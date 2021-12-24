# DIAG Website content

This repository stores all the content and source code for the FastMRI website. From this repository a Vuepress website is built.

[![Build and Deploy](https://github.com/snorthman/FastMRIWeb/actions/workflows/vuedeploy.yml/badge.svg)]

## Updating the content

Within the `/docs/` directory structure, the page routing paths are as follows:

|    Relative Path      |  Page Routing  |
|-----------------------|----------------|
| `/README.md`          | `/`            |
| `/research/README.md` | `/research/`   |
| `/contact.md`         | `/contact.html`|

### Adding a person

In `/docs/people.md`, add a new line:

`<Person name="NAME" title="TITLE" url="URL" img="IMAGE" />`

`img` is optional. Add images to the `/docs/.vuepress/public/people/` directory for `img` to resolve.

### Adding a research page

Create a new `.md` file in `/docs/research/`, use only alphanumerics and dashes for the name.

Use the following boilerplate, `img` is optional.

```
---
title: Title
description: Description
img: Image file name
---
**Content**
```

In `/research/README.md`, add a new line:

`<Research slug="SLUG"/>`

`SLUG` is the `.md` file name, without extension. Add images to the `/docs/.vuepress/public/research/` directory for `img` to resolve.

## Building the website locally

Working directory contains the `package.json` file.

1. `npm install`
2. `npm run build`
