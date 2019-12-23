---
title: Collapse - 折叠面板
---
# 折叠面板

# 基础用法
<br />
<ClientOnly>
  <collapse-demos></collapse-demos>
</ClientOnly>

```html
<g-collapse :selected.sync="selectedCollapse">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
```

```JS
data() {
    return {
        selectedCollapse: ['2'],
    }
}
```

# 手风琴效果
<br />
<ClientOnly>
  <collapse-demos2></collapse-demos2>
</ClientOnly>

```html
<g-collapse :selected.sync="selectedCollapse" single>
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
```

```JS
data() {
    return {
        selectedCollapse: ['2'],
    }
}
```

# Collapse Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
|selected|当前展开item的name集合|Array|    |——|
|single|能否同时展开多个item|Boolean|    |false|

# Collapse Item Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
|title|名字|String|       |——|
|name|item的name|String|    |——|