<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'lunzi-button-group',
        mounted() {
            for (let node of this.$el.children) {
                let name = node.nodeName.toLowerCase();
                if (name !== 'button') {
                    console.warn(`g-button-group 的子元素应该全是 g-button，但是你写的是 ${name}`)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $border-radius: 4px;

    .g-button-group {
        display: inline-flex;
        vertical-align: middle;
        justify-content: center;
        align-items: center;

        > .g-button {
            border-radius: 0;

            &:not(:first-child) {
                margin-left: -1px;
            }


            &:hover {
                position: relative;
                z-index: 1;
            }

            &:first-child {
                border-top-left-radius: $border-radius;
                border-bottom-left-radius: $border-radius;
            }

            &:last-child {
                border-top-right-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
    }
</style>