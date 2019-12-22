<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="icon loading" v-if="loading" name="loading"></g-icon>
        <div class="g-button-content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    // import Vue from 'vue'
    import Icon from './icon'
    // Vue.component('g-icon', Icon);
    export default {
        name: 'lunzi-button',
        components: {
            'g-icon': Icon
        },
        // props: ['icon', 'iconPosition']
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false,
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return !(value !== 'left' && value !== 'right');
                }
            },
        },
    }
</script>
<style lang="scss" scoped>
    $font-size:14px;
    $button-height:32px;
    $button-background:white;
    $button-active-background: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .g-button {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-background;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {
            border-color: $border-color-hover
        }

        &:active {
            background-color: $button-active-background;
        }

        &:focus {
            outline: none;
        }

        > .icon {
            order: 1;
            margin-right: .1em;
            margin-left: 0;
        }

        > .g-button-content {
            order: 2;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .1em;
            }

            > .g-button-content {
                order: 1;
            }
        }
    }

    .loading {
        animation: spin 1.2s infinite linear;
    }

</style>