# [DIAG Website content](https://snorthman.github.io/FastMRIWeb/)

This repository stores all the content and source code for the FastMRI website. From this repository a Vuepress website is built.

![Build and Deploy](https://github.com/snorthman/FastMRIWeb/actions/workflows/vuedeploy.yml/badge.svg)

## Updating the content

Read the [basic Markdown guide](https://www.markdownguide.org/basic-syntax/) to get started. Any file ending with `.md` is a Markdown file. Content between two `---` lines is not Markdown, but the "frontmatter".

Images in Markdown can be added in the same directory (e.g. `![An image](./image.png)` in `/docs/README.md` resolves to `/docs/image.png`).

Within the `/docs/` directory structure, the page routing paths are as follows:

|    Relative Path      |  Page Routing  |
|-----------------------|----------------|
| `/README.md`          | `/`            |
| `/research/README.md` | `/research/`   |
| `/contact.md`         | `/contact.html`|

### Adding a person

In `/docs/people.md`, add a new line within a `<People header="HEADER">`:

`<Person name="NAME" title="TITLE" url="URL" img="IMAGE" />`

`img` is optional. Add images to the `/docs/.vuepress/public/people/` directory for `img` to resolve. Try to keep them square.

### Adding an action button

In any `.md` file, you can add

`<ActionButton action="BUTTON TEXT" link="HYPERLINK" />`

If `link` starts with `/`, it is assumed to be relative to `fastmri.eu` (e.g. `/research/` resolves to `fastmri.eu/research/`)

### Adding a research page (Deprecated)

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

Your working directory contains the `package.json` file. `npm` is installed by installing [`nodejs`](https://nodejs.org/en/download/).

1. `npm install`
2. `npm run build` or `npm run dev` to host the website locally.
