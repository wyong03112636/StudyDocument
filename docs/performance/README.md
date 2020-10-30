# Performance

## SEO

- 文档地址: `https://web.dev/lighthouse-seo/`

- 确保搜索引擎明白你的页面的内容
  - 页面必须包含`<title>`标签，标签内容尽可能写的详细
  - 文档必须包含`<meta name="description" content="页面内容的总结">`
  - 超链接文本尽量详细
  - link 标签的`hreflang`属性，很多页面可能基于不同的语言、领域有不同的版本，所以提供一个`hreflang`,告诉浏览器展示正确的版本
    ```html
    <link rel="alternate" hreflang="en" href="https://example.com" />
    <link rel="alternate" hreflang="es" href="https://es.example.com" />
    <link rel="alternate" hreflang="de" href="https://de.example.com" />
    ```

## chrome 开发者工具

- `https://www.html.cn/doc/chrome-devtools/iterate/iterate/settings/#other`

## 页面性能优化手段

### Service Worker

- [Google 官方文档](https://developers.google.com/web/fundamentals/primers/service-workers/)

- 原理： 简单的理解为在`Browser`和`Server`中间的一层`Proxy`, 根据不同资源采取不同策略，将资源缓存到`Cache API`中

### SSR

- 简单理解： 本质上请求后端直接返回`html`文件，前端直接显示

### 骨架图&loading 动画 (提高用户体验)

### preload & prefetch

- 作用： 在浏览器没有构建 dom 之前开始加载资源
