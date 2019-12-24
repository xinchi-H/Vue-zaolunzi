---
title: Popover - 弹出框
---
# 弹出层

# 使用方法

<br />
<ClientOnly>
  <popover-demos></popover-demos>
</ClientOnly>

```html
<g-popover position="bottom">
    <template slot="content" slot-scope="{close}">
        <div>popover内容</div>
        <g-button @click="close">关闭</g-button>
    </template>
    <g-button>下方弹出</g-button>
</g-popover>
<g-popover position="top">
    <template slot="content">
        <div>popover内容</div>
    </template>
    <g-button>上方弹出</g-button>
</g-popover>
<g-popover position="left">
    <template slot="content">
        <div>popover内容</div>
    </template>
    <g-button>左边弹出</g-button>
</g-popover>
<g-popover position="right">
    <template slot="content">
        <div>popover内容</div>
    </template>
    <g-button>右边弹出</g-button>
</g-popover>
```

```JS

```

# Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
|position|弹出位置|String|top/ bottom/ middle|top|
|closeButton|关闭选项（可携带callback）|Object|   |——|
|enableHTML|是否支持HTML|Boolean||false|
|autoClose|是否自动关闭|Boolean/ Number|   |5|