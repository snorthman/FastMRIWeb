# [DIAG Website content](https://snorthman.github.io/FastMRIWeb/)

This repository stores all the content and source code for the FastMRI website. From this repository a Vuepress website is built.

![Build and Deploy](https://github.com/snorthman/FastMRIWeb/actions/workflows/vuedeploy.yml/badge.svg)

## Editing content

Any `.md` file is open for editing. When you are done editing, you can propose the edit by pressing **Propose changes**. After review, the edits will be published.

[Edit the main page](https://github.com/snorthman/FastMRIWeb/edit/master/docs/README.md)

[Edit the /people/ page](https://github.com/snorthman/FastMRIWeb/blob/master/docs/people.md) (See 'Adding a person' for more info)

[Edit the /research/ page](https://github.com/snorthman/FastMRIWeb/blob/master/docs/README.md)

## Updating the content

Read the [basic Markdown guide](https://www.markdownguide.org/basic-syntax/) to get started. Any file ending with `.md` is a Markdown file. Content between two `---` lines is not Markdown, but the "frontmatter".

Images in Markdown can be added in the same directory (e.g. `![An image](./image.png)` in `/docs/README.md` resolves to `/docs/image.png`).

Within the `/docs/` directory structure, the page routing paths are as follows:

| Relative Path         | Page Routing    |
| --------------------- | --------------- |
| `/README.md`          | `/`             |
| `/research/README.md` | `/research/`    |
| `/contact.md`         | `/contact.html` |

### Adding a person

In `/docs/people.md`, add a new line within a `<People header="HEADER">`:

`<Person name="NAME" title="TITLE" url="URL" img="IMAGE" />`

`img` is optional. Add images to the `/docs/.vuepress/public/people/` directory for `img` to resolve. Try to keep them square.

### Adding an action button

In any `.md` file, you can add

`<ActionButton action="BUTTON TEXT" link="HYPERLINK" />`

If `link` starts with `/`, it is assumed to be relative to `fastmri.eu` (e.g. `/research/` resolves to `fastmri.eu/research/`)

### Adding a research page

Create a new `.md` file in `/docs/research/`, use only alphanumerics for the name.

Use the following boilerplate:

```
---
pageClass: research
title: A. A. Albert, et al. (2023a)
---
# Title of my abstract

## 📚 Citation
Vancouver-styled citation, use _underscores_ for italics.

If your abstract is open access:
<ActionButton action="This paper is open access!" link="https://link/to/website" />
otherwise remove.

## 🏆 Award
If this abstract achieved an award, otherwise delete me.

## 📖 Abstract
Content ...

## 🤖 Algorithm
If you have an algorithm to share, otherwise delete me. 

<ActionButton action="Algorithm" link="https://grand-challenge.org/algorithms/my-algorithm/" />

## 💻 Code
If you have open source code to share, otherwise delete me. 

<ActionButton action="Source" link="www.github.com/mycode" />
```

## Building the website locally

Make sure the working directory contains the `package.json` file. `npm` is installed by installing [`nodejs`](https://nodejs.org/en/download/).

1. `npm install`
2. `npm run build` or `npm run dev` to host the website locally.
