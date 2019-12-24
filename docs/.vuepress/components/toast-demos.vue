<template>
    <div>
        <g-button @click="showToast">上方弹出</g-button>
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
        methods: {
            showToast() {
                this.$toast('我是Toast',
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