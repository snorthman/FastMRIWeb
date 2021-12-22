const { description } = require('../../package')
const getConfig = require("vuepress-bar");
const { nav, sidebar } = getConfig({ addReadMeToFirstGroup: false });
console.log(sidebar)

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
    editLinks: true,
    docsDir: '',
    search: false,
    editLinkText: 'Edit',
    lastUpdated: 'Last updated',
    smoothScroll: true,
    sidebar,
    // sidebar: {
    //   '/research/': {
    //     title: 'x',
    //     collapsable: false,
    //   }
    // },
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
  plugins: {
    'seo': {},
    'authors': {},
    'vuepress-plugin-mathjax': {

    }
  }
}