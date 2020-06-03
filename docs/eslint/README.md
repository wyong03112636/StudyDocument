# ESLint
## 什么是ESlint？
- ESlint是一个插件化的JS代码检查工具

## 如何使用
- 生成配置文件
  - `yarn add eslint`
  - `npx eslint --init`

~~~json
{
    "env": {   //指定脚本的运行环境。每种环境都有一组特定的预定义全局变量。
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended", //值不同时启动一些eslint推荐的规则
    "globals": { //脚本在执行期间访问的额外的全局变量。
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 11,  //兼容的es的版本
        "sourceType": "module", //使用的模块化的方法
        "ecmaFeatures": {  //额外想用的语言特性
            "jsx": true
        }
    },
    "rules": {  //启用的规则及其各自的错误级别。
        "no-unused-vars": "off"
    }
}
~~~
## 配置文件的优先级
- 当不同的文件夹中的文件需要使用不同的eslint规则时，可以通过在不同的目录中新建配置文件，然后配置不同的规则，eslint会根据就近原则，优先使用当前文件中的配置文件的配置，当于外部配置冲突时，内部规则会覆盖外部规则

## 配置eslint的方式
- 通过json文件的方式
- 通过JavaScript文件的方式
- 通过YAML文件的方式
- 通过package.json中的eslingConfig模块的方式
- 通过在文件中添加注释的方式

## 配置文件中`env`字段的含义
- 配置不同的环境，相应的代码中使用的全局变量就不会报错
  - 当配置`"node": "true"`时，检测的代码中出现`window`等全局变量就会报错，当添加上`"browser": "true"`时就可以修复报错
  
~~~json
{
  "env": {
    "node": "true"
  }
}
~~~

## 配置文件中`globals`字段的含义
- 定义全局对象，并且设置是否只读还是可读可写
  
~~~json
{
  "globals": {
    "ServerData": "readonly", //代表只读
    "ServerData": true //代表可读可写
  }
}
~~~

## 配置文件中的`extends`字段的含义
- 当值为`eslint:recommended`时，使用官方推荐的一套规则，但是可以在`rules`中更新配置，并覆盖继承的配置