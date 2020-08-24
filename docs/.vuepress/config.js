module.exports = {
  title: 'Myself document',
  description: 'Myself document',
  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://baidu.com' },
    ],
    sidebar: [
      {
        title: 'Babel',
        path: '/babel/',
        collapseable: true,
      },
      {
        title: 'ESLint',
        path: '/eslint/',
        collapseable: true,
      },
      {
        title: 'React',
        path: '/react/',
        collapseable: true,
      },
      {
        title: 'TypeScript',
        path: '/typescript/',
        collapseable: true,
      },
      {
        title: 'Array&Object',
        path: '/array&object/',
        collapseable: true,
      },
      {
        title: 'Chore',
        path: '/chore/',
        collapseable: true,
      },
      {
        title: '设计模式',
        path: '/designmode/',
        collapseable: true,
      },
    ],
  },
};
