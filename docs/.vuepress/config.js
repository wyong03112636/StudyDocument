module.exports = {
  title: 'Personal Documents',
  description: 'Personal Documents',
  dest: './dist',
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
        title: 'WebPack',
        path: '/webpack/',
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
      {
        title: '数据结构与算法',
        path: '/datastructure/',
        collapseable: true,
      },
      {
        title: '性能方面',
        path: '/performance/',
        collapseable: true,
      },
      {
        title: '网络方面',
        path: '/network/',
        collapseable: true,
      },
    ],
  },
};
