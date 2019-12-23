# lunzi — 一个Vue UI组件
[![Build Status](https://travis-ci.org/xinchi-H/Vue-zaolunzi.svg?branch=master)](https://travis-ci.org/xinchi-H/Vue-zaolunzi)
## 介绍
这是我在学习 vue 过程中做的一个 UI 框架，希望对你有用
## 开始使用
1.添加 CSS 样式
  使用本框架前，请在 CSS 中开启 border-box
  ```
  *{box-sizing: border-box}
  *::before{box-sizing: border-box}
  *::after{box-sizing: border-box}
  ```
  IE8 及以上浏览器都支持此样式
  
2.安装 zaolunzi
  ```
  npm i --save zaolunzi201911
  ```

3.引入 zaolunzi
```
  import {Button, ButtonGroup, Icon} from 'zaolunzi201911'
  import 'zaolunzi201911/dist/index.css'

  export default {
     name: 'app',
     components: {
        'g-button': Button,
        'g-icon': Icon
     }
  }
```

4.


## 文档
## 提问
## 变更记录
## 联系方式
## 贡献代码
