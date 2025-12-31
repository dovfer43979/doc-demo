import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "多弗的VitePress文档",
  description: "一个VitePress文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dovfer43979' },
      { icon: 'gitee', link: 'https://gitee.com/dovfer' }
    ],
    footer:{
      copyright: 'Copyright © 2025'
    }
  },
  base: '/doc-demo',
})
