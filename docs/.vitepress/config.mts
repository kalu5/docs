import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "kalu5",
  description: "Yak shaving",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/footmark/l.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }]
  ],
  themeConfig: {
    logo: { src: '/j.png', width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '薅牛毛', link: '/' },
      { text: '薅牛毛前', link: '/pages/base/index' }
    ],

    sidebar: [
      {
        text: '薅牛毛前',
        items: [
          { text: '你不知道的Javascript', items: [
            {
              text: '重学Javascript',
              link: '/pages/base/js/js-deep'
            },
            {
              text: '对象克隆',
              link: '/pages/base/js/clone-obj'
            },
            {
              text: '数组遍历',
              link: '/pages/base/js/arr-traversal'
            }
          ] },
          { text: '代码整洁之道', items: [
            {
              text: '设计模式',
              link: '/pages/base/code/design-principles'
            },
          ] },
          { text: 'NodeJs', items: [
            {
              text: 'MiniExpress',
              link: '/pages/base/node/mini-express'
            },
          ] },
          { text: 'Css世界', link: '/pages/base/css/index' },
          { text: 'Vue及周边', items: [
            {
              text: 'Vue设计原理',
              link: '/pages/base/vue/index'
            },
            {
              text: 'Pinia实现原理',
              link: '/pages/base/vue/pinia'
            }
          ] },
          { text: 'React原理', link: '/pages/base/react/index' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kalu5' }
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} kalu5`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },
  base: '/footmark/'
})
