<template>
  <div>
    <g-input value="王五"></g-input>
    <g-input value="李四" readonly></g-input>
    <g-input value="张三" disabled></g-input>
  </div>
</template>

<script>
import Input from "../../../src/input";

export default {
  components: {
    "g-input": Input,
  }
};
</script>