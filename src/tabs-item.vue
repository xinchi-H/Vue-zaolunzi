<template>
    <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
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
                    disabled: this.disabled,
                }
            }
        },
        created() {
            if (this.eventBus) {
                this.eventBus.$on('update:selected', (name) => {
                    this.active = name === this.name
                    // if(name===this.name){
                    //     this.active=true
                    // }else{
                    //     this.active=false
                    // }
                })
            }
        },
        methods: {
            onClick() {
                if (this.disabled) {
                    return
                }
                this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
                this.$emit('click', this)
            }
        }
    }
</script>

<style scoped lang="scss">
    $blue: blue;
    $disabled-text-color: grey;
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
        &.disabled {
            cursor: not-allowed;
            color: $disabled-text-color;
        }
    }
</style>