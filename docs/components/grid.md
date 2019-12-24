---
title: Grid
---
# 网格

# 基础布局
<br />
<ClientOnly>
  <grid-demos></grid-demos>
</ClientOnly>

注：已通过gutter设置栅格间隔为10px

```HTML
<g-row gutter="10" class="demoRow">
    <g-col span="12">
        <div class="demoCol">12</div>
    </g-col>
    <g-col span="12">
        <div class="demoCol">12</div>
    </g-col>
</g-row>
<g-row gutter="10" class="demoRow">
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
</g-row>
<g-row gutter="10" class="demoRow">
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
</g-row>
```

# 分栏间隔
<br />
<ClientOnly>
  <grid-demos2></grid-demos2>
</ClientOnly>

```HTML
<g-row gutter="10" class="demoRow">
    <g-col span="12">
        <div class="demoCol">12</div>
    </g-col>
    <g-col span="10" offset="2">
        <div class="demoCol">10</div>
    </g-col>
</g-row>
<g-row gutter="10" class="demoRow">
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6" offset="1">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6" offset="5">
        <div class="demoCol">6</div>
    </g-col>
</g-row>
```

# 响应式布局
<br />
<ClientOnly>
  <grid-demos3></grid-demos3>
</ClientOnly>

```HTML
<g-row gutter="20">
    <g-col span="12"
           :ipad="{span:8}"
           :narrow-pc="{span:4}"
           :pc="{span:2}"
           :wide-pc="{span:1}"
    >
        <div class="demoCol">1</div>
    </g-col>
    <g-col span="12"
           :ipad="{span:16}"
           :narrow-pc="{span:20}"
           :pc="{span:22}"
           :wide-pc="{span:23}"
    >
        <div class="demoCol">10</div>
    </g-col>
</g-row>
```

# Row Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
|gutter|栅格间隔|String/ Number|   |0|
|align|flex 布局下的水平排列方式|String|left/ right/ center|——|

# Col Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
|span|栅格占据的列数|String/ Number|       |24|
|offset|栅格左侧的间隔格数	|String/ Number|    |0|
|ipad|ipad 响应式栅格数或者栅格属性对象|Object|   |——|
|narrowPc|narrowPc 响应式栅格数或者栅格属性对象|Object|   |——|
|pc|pc 响应式栅格数或者栅格属性对象|Object|   |——|
|widePc|widePc 响应式栅格数或者栅格属性对象|Object|   |——|