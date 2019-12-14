<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'lunzi-tabs-item',
        inject: ['eventBus'],
        data() {
            return {
                active: false
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false,
            },
            name: {
                type: [String, Number],
                required: true,
            },
        },
        computed: {
            classes() {
                return {
                    active: this.active,
                }
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name
                // if(name===this.name){
                //     this.active=true
                // }else{
                //     this.active=false
                // }
            })
        },
        methods: {
            xxx() {
                this.eventBus.$emit('update:selected', this.name, this)
            }
        }
    }
</script>

<style scoped lang="scss">
    $blue: blue;
    .tabs-item {
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        flex-shrink: 0;
        padding: 0 2em;
        &.active {
            font-weight: bold;
            color: $blue;
        }
    }
</style>