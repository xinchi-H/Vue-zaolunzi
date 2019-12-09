<template>
    <div class="tabs-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'lunzi-tabs-item',
        props: {
            disabled: {
                type: Boolean,
                default: false,
            }
        }
    }
</script>

<style>
    .tabs-item {

    }
</style>