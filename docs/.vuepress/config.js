const path = require('path')
const { description } = require('../../package')
const getConfig = require("vuepress-bar");
var { _, sidebar } = getConfig();

module.exports = {
  // base: '/FastMRIWeb/',
  base: '/',
  title: 'FastMRI.eu',
  description: description,
  head: [
    //<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: 'favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#EC7700' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    repo: 'snorthman/FastMRIWeb',
    repoLabel: '',
    editLinks: true,
    editLinkText: 'Edit this page',
    docsDir: 'docs',
    lastUpdated: 'Last updated',
    nextLinks: false,
    prevLinks: false,
    search: false,
    sidebar: [
      {
        path: '/research/',
        title: 'Research',
        collapsable: false,
        sidebarDepth: 0,
        children: sidebar.find(o => o.title == "Research").children.slice(1)
      }
    ],
    nav: [
      {
        text: 'FastMRI',
        link: '/'
      },
      {
        text: 'People',
        link: '/people/',
      },
      {
        text: 'Research',
        link: '/research/'
      }
    ]
  },
  plugins: [
    'seo', 'authors', 'mathjax'
  ]
}