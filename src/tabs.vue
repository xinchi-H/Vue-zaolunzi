<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'lunzi-tabs',
        props: {
            selected: {
                type: String,
                required: true,
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'lunzi-tabs-head') {
                    vm.$children.forEach((childVm) => {
                        if (childVm.$options.name === 'lunzi-tabs-item' && childVm.name === this.selected) {
                            this.eventBus.$emit('update:selected', this.selected, childVm)
                        }
                    })
                }
            });
        }
    }
</script>

<style>
    .tabs {

    }
</style>