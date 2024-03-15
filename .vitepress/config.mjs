import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Внешний сайт",
  description: "Документация по внешенму сайту",

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/pixel-logo.png' }],
  ],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: { src: '/company-logo-mini.png', width: 24, height: 24 },
    logo: { src: '/pixel-logo.png', width: 24, height: 24 },
    
    nav: [
      { text: 'Гайд', link: '/guide/what-is' },
      { text: 'API', link: '/docs/api' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Что за проект?', link: '/guide/what-is' },
          { text: 'API', link: '/docs/api' }
        ]
      }
    ],

    footer: {
      message: 'Документация внешнего сайта.',
      copyright: 'Copyright © 2024-настоящее'
    },

    socialLinks: [
      { icon: 'github', link: 'https://forge.ffin.life/workspace/freedom_life_frontend' }
    ]
  }
})
