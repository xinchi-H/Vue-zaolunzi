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
        this.$toast('我是Toast',
            {
                position: 'top',
                closeButton: {
                    text: '知道了',
                    callback() {
                        console.log('我知道了');
                    }
                },
                enableHTML: false,
                autoClose: 50,
            }
        )
    }
}
```

# Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
|position|弹出位置|String|top/ bottom/ middle|top|
|closeButton|关闭选项（可携带callback）|Object|   |——|
|enableHTML|是否支持HTML|Boolean||false|
|autoClose|是否自动关闭|Boolean/ Number|   |5|