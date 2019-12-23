module.exports = {
  base:'/Vue-zaolunzi/',
  title: 'lunzi UI',
  description: '一个好用的 UI 框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '通用',
        children: [
          '/components/button',
          '/components/button-group',
          '/components/input',
        ]
      },
      {
        title: '布局',
        children: [
          '/components/grid',
          '/components/layout',
        ]
      },
      {
        title: '数据展示',
        children: [
          '/components/tabs',
          '/components/collapse',
        ]
      },
      {
        title: '信息提示',
        children: [
          '/components/toast',
          '/components/popover',
        ]
      },
    ]
  }
}