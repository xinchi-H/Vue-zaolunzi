---
title: Input
---
# 输入框

# 使用方法
<br />
<ClientOnly>
  <input-demos></input-demos>
</ClientOnly>

```html
<g-input value="王五"></g-input>
<g-input value="李四" readonly></g-input>
<g-input value="张三" disabled></g-input>
```

# 进阶用法
<br />
<ClientOnly>
  <input-demos2></input-demos2>
</ClientOnly>

```html
<g-input value="请输入内容" @change="inputChange"></g-input>
<g-input value="内容" error="内容不能少于三个字"></g-input>
<div style="padding:5px 0">
    <g-input v-model="message"></g-input>
    <p style="margin: 5px 0">{{message}}</p>
    <button @click="message+=1">双向绑定内容+1</button>
</div>
```

```JS
data() {
    return {
      message: "我是双向绑定"
    };
  },
  methods: {
    inputChange(info) {
      console.log(info);
    }
  }
```

# Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
|value|绑定值|String/Date|    |——|
|disabled|是否禁用|Boolean|   |false|
|readonly|是否只读|Boolean|   |false|
|error|显示错误文本|String|   |——|