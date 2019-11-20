<template>
    <div class="wrapper">
        <input type="text">
    </div>
</template>

<script>
    export default {
        name: 'lunzi-input',
    }
</script>

<style lang="scss" scoped>
    /*--button-height: 32px;*/
    /*--font-size: 14px;*/
    /*--button-background: white;*/
    /*--button-active-background: #eee;*/
    /*--border-radius: 4px;*/
    /*--color: #333;*/
    /*--border-color: #999;*/
    /*--border-color-hover: #666;*/
    $height: 32px;
    $border-color: #999;
    .wrapper {
        > input {
            height: $height;
            border: 1px solid $border-color;
        }
    }
</style>