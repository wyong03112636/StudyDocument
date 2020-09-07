# Performance

## SEO

- 文档地址: `https://web.dev/lighthouse-seo/`

- 确保搜索引擎明白你的页面的内容
  - 页面必须包含`<title>`标签，标签内容尽可能写的详细
  - 文档必须包含`<meta name="description" content="页面内容的总结">`
  - 超链接文本尽量详细
  - link 标签的`hreflang`属性，很多页面可能基于不同的语言、领域有不同的版本，所以提供一个`hreflang`,告诉浏览器展示正确的版本
    ```css
      <link rel="alternate" hreflang="en" href="https://example.com" />
      <link rel="alternate" hreflang="es" href="https://es.example.com" />
      <link rel="alternate" hreflang="de" href="https://de.example.com" />
    ```

## chrome 开发者工具

- `https://www.html.cn/doc/chrome-devtools/iterate/iterate/settings/#other`
