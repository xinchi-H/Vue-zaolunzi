---
title: Tabs - 标签
---
# 标签

# 使用方法
<br />
<ClientOnly>
  <tabs-demos></tabs-demos>
</ClientOnly>

<br />

```html
<g-tabs :selected.sync="selectedTab">
    <g-tabs-head>
        <template slot="actions"><button>settings</button></template>
        <g-tabs-item name="cars">汽车</g-tabs-item>
        <g-tabs-item name="finance" disabled>财经</g-tabs-item>
        <g-tabs-item name="sports">体育</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
        <g-tabs-pane name="cars">汽车相关资讯</g-tabs-pane>
        <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
        <g-tabs-pane name="sports">体育相关资讯</g-tabs-pane>
    </g-tabs-body>
</g-tabs>
```

```js
data() {
    return {
        selectedTab: 'cars'
    }
}
```