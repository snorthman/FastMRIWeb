const path = require('path')
const { description } = require('../../package')
const getConfig = require("vuepress-bar");
var { _, sidebar } = getConfig();

module.exports = {
  base: '/FastMRIWeb/',
  title: 'FastMRI.eu',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#EC7700' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    repo: 'snorthman/FastMRIWeb',
    repoLabel: 'GitHub',
    editLink: true,
    editLinkText: 'Edit this page',
    docsDir: 'docs',
    lastUpdated: 'Last updated',
    nextLinks: false,
    prevLinks: false,
    darkMode: false,
    sidebar: [
      {
        path: '/research/',
        title: 'Research lines',
        collapsable: false,
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
      },
      {
        text: 'Contact',
        link: '/contact/'
      }
    ]
  },
  plugins: [
    'seo', 'authors', 'mathjax'
  ]
}