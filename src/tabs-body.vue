<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'lunzi-tabs-body',
        inject: ['eventBus'],
    }
</script>

<style>
    .tabs-body {

    }
</style>