---
title: Button
---
# 按钮

# 使用方法
<br />
<ClientOnly>
  <button-demos></button-demos>
</ClientOnly>

```html
<g-button>默认按钮</g-button>
<g-button icon="settings">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>
```

# Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
|icon|图标类型|String|settings/up/down/left/right/download/thumbs-up|——|
|icon-position|图标位置|String|left / right|left|
|loading|是否加载中|Boolean|   |false|
|disabled|是否禁用|Boolean|   |false|