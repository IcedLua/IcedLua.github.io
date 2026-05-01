import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IcedLuau Documentation",
  description: "Very epic and awesome docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
    ],

    notFound: {
        title: 'not found!',
        quote: 'attempt to index nil with GET',
        linkText: 'return home'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/IcedLuau/' }
    ]
  }
})
