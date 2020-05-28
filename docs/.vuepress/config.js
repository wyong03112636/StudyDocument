module.exports = {
  title: 'Study document',
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
      }
    ]
  }
}