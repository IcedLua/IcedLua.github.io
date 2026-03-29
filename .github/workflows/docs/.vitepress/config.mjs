export default {
  title: "My Project Docs", // Change this to your project name
  description: "Documentation for my cool project",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Quick Start', link: '/index' },
          { text: 'Installation', link: '/install' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YOUR_USERNAME/YOUR_REPO' }
    ]
  }
}
