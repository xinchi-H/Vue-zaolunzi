<template>
  <div style="overflow: hidden;">
    <g-layout>
      <g-sider>sider</g-sider>
      <g-layout>
        <g-header>header</g-header>
        <g-content>content</g-content>
        <g-footer>footer</g-footer>
      </g-layout>
    </g-layout>
  </div>
</template>

<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Sider from "../../../src/sider";
import Content from "../../../src/content";
import Footer from "../../../src/footer";

export default {
  components: {
    "g-layout": Layout,
    "g-header": Header,
    "g-sider": Sider,
    "g-content": Content,
    "g-footer": Footer
  }
};
</script>

<style lang="stylus">
.layout{
    color: white;
}

.sider {
  background: #333;
  width: 200px;
}

.header {
  background: #999;
  height: 100px;
}

.content {
  background: #666;

}

.footer {
  background: #ccc;
  height: 50px;
}
</style>