<template>
  <div>
    <g-input value="请输入内容" @change="inputChange"></g-input>
    <g-input value="内容" error="内容不能少于三个字"></g-input>
    <div style="padding-top:5px">
      <g-input v-model="message"></g-input>
      <p style="margin: 5px 0">{{message}}</p>
      <button @click="message+=1">双向绑定内容+1</button>
    </div>
  </div>
</template>

<script>
import Input from "../../../src/Input";

export default {
  components: {
    "g-input": Input
  },
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
};
</script>