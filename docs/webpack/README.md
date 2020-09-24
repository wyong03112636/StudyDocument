# webpack

## entry

- webpack 的打包入口，根据入口找到文件的依赖关系进行打包
- 可以设置多口入，多入口配置。[多入口详细配置](https://chinese.freecodecamp.org/news/an-introduction-to-webpack-multi-entry-configuration/)

## output

- 打包之后的输入地址

```js
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const webpack = require('webpack')
  module.exports = {
    entrty: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist')
      filename: '[name]_[hash:6]_dundle.js', //打包之后的文件名,置顶hash值并且置顶hash位数, hash值是根据文件内容算出来的
      publicpath: 'https://example.com' //修改html文件的引入地址，将当前域名添加到引入路径前，一般用于cdn
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    module: {
      rules: [
        {
          tset: /.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    devServer: {
      contentBase: './dist',
      hot: true
    }
  }
```

## plugin

- 一般用于打包过程中的功能扩展

### HtmlWebpackPlugin

- 打包之后自动生成 html 文件，并自动引入 js 文件

### ExtractTextWebpackPlugin

- 将 css 代码单独抽离一个文件

## loader

- 对 import 模块导入进行预处理，区别与 plugin 的是将一些浏览器不能识别代码进行转换

- `css-loader`: 将通过 import 或者 url 导入的 css 样式进行解析
- `style-loader`: 将 css 样式通过 style 标签引入
- `ts-loader`: 将 ts 文件进行转换，同时安装 typescript，添加 tsconfig.json 配置文件
