---
title: Grid
---
# 网格

# 使用方法
<br />
<ClientOnly>
  <grid-demos></grid-demos>
</ClientOnly>

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