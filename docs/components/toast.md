---
title: Toast - 吐司
---
# Toast

# 使用方法
<br />
<ClientOnly>
  <toast-demos></toast-demos>
</ClientOnly>

```html
<g-button @click="showToast">上方弹出</g-button>
<g-button @click="showToast">中间弹出</g-button>
<g-button @click="showToast">下方弹出</g-button>
```

# Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
|icon|图标类型|String|settings/up/down/left/right/download/thumbs-up|——|
|icon-position|图标位置|String|left / right|left|
|loading|是否加载中|Boolean|   |false|
|disabled|是否禁用|Boolean|   |false|