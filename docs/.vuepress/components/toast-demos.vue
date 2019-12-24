<template>
    <div>
        <g-button @click="showToast">上方弹出</g-button>
        <g-button @click="showToast">中间弹出</g-button>
        <g-button @click="showToast">下方弹出</g-button>
    </div>
</template>

<script>
    import Button from '../../../src/button'
    import Toast from '../../../src/toast'
    import plugin from "../../../src/plugin"
    import Vue from 'vue'
    Vue.use(plugin);

    export default {
        components: {
            "g-button": Button,
            "g-toast": Toast,
        },
        data() {
            return {

            }
        },
        methods: {
            showToast() {
                this.$toast(`我是第${parseInt(Math.random() * 100)}个<p>message</p>`,
                    {
                        position: 'top',
                        closeButton: {
                            text: '知道了',
                            callback() {
                                console.log('我知道了');
                            }
                        },
                        enableHTML: true,
                        autoClose: 50,
                    }
                )
            }
        }
    };
</script>