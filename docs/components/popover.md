---
title: Popover - 弹出框
---
# 弹出层

# 基础用法
<br />
<ClientOnly>
  <popover-demos></popover-demos>
</ClientOnly>

注：第一个popover添加了关闭按钮

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

# Hover 触发
<br />
<ClientOnly>
  <popover-demos2></popover-demos2>
</ClientOnly>

```HTML
<g-popover position="bottom" trigger="hover">
    <template slot="content">
        <div>popover内容</div>
    </template>
    <g-button>上方弹出</g-button>
</g-popover>
<g-popover position="top" trigger="hover">
    <template slot="content">
        <div>popover内容</div>
    </template>
    <g-button>上方弹出</g-button>
</g-popover>
<g-popover position="left" trigger="hover">
    <template slot="content">
        <div>popover内容</div>
    </template>
    <g-button>左边弹出</g-button>
</g-popover>
<g-popover position="right" trigger="hover">
    <template slot="content">
        <div>popover内容</div>
    </template>
    <g-button>右边弹出</g-button>
</g-popover>
```

# Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
|position|弹出位置|String|top/ bottom/ left/ right|top|
|trigger|触发方式|String|click/ hover|click|