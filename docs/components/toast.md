---
title: Toast - 吐司
---
# Toast
::: warning 注意
Toast 组件是以插件的方式引入,它将在 Vue.prototype上添加全局方法$toast,请引入插件,并且在 Vue 实例化之前注入
:::

# 使用方法
<br />
<ClientOnly>
  <toast-demos></toast-demos>
</ClientOnly>

```html
<g-button @click="showToast">上方弹出</g-button>
```

```JS
methods: {
    showToast() {
        this.$toast(`我是第${parseInt(Math.random() * 100)}个<p>message</p>`,
            {
                position: 'top',
                closeButton: {
                    text: '知道了',
                    callback() {
                        console.log('我知道了');
                    }
                },
                enableHTML: true,
                autoClose: 50,
            }
        )
    }
}
```

# Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
|icon|图标类型|String|settings/up/down/left/right/download/thumbs-up|——|
|icon-position|图标位置|String|left / right|left|
|loading|是否加载中|Boolean|   |false|
|disabled|是否禁用|Boolean|   |false|