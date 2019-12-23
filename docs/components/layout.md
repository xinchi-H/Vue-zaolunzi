---
title: Layout - 布局
---
# 布局

# 常见布局
<br/>
<ClientOnly>
  <layout-demos></layout-demos>
</ClientOnly>

```html
<g-layout style="overflow: hidden; height: 300px;">
    <g-sider style="background: #333; width: 200px;">sider</g-sider>
    <g-layout>
        <g-header style="background: #999; height: 80px;">header</g-header>
        <g-content style="background: #777;">content</g-content>
        <g-footer style="background: #ccc; height: 80px;">footer</g-footer>
    </g-layout>
</g-layout>
```
