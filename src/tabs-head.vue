<template>
    <div class="tabs-head" ref="tabsHead">
        <slot></slot>
        <div class="tabs-line" ref="tabsLine"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'lunzi-tabs-head',
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (item, vm) => {
                let {width, left} = vm.$el.getBoundingClientRect();
                let {left: left2} = this.$refs.tabsHead.getBoundingClientRect();
                this.$refs.tabsLine.style.width = `${width}px`;
                this.$refs.tabsLine.style.left = `${left - left2}px`
            })
        }
    }
</script>

<style scoped lang="scss">
    $blue: blue;
    $tab-height: 40px;
    $border-color: #ddd;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        position: relative;
        border-bottom: 1px solid $border-color;
        > .tabs-line {
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $blue;
            transition: all 350ms;
        }
        .actions-wrapper {
            margin-left: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1em;
        }
    }
</style>