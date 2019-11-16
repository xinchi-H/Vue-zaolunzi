<template>
    <button class="g-button" v-if="!iconPosition || iconPosition==='left'">
        <svg v-if="icon" class="icon">
            <use :xlink:href=`#i-${icon}`></use>
        </svg>
        <slot></slot>
    </button>
    <button class="g-button" v-else>
        <slot></slot>
        <svg v-if="icon" class="icon">
            <use :xlink:href=`#i-${icon}`></use>
        </svg>
    </button>
</template>
<script>
    export default {
        props:['icon','iconPosition']
    }
</script>
<style lang="scss">
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-background);

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-background);
        }

        &:focus {
            outline: none;
        }
    }


</style>