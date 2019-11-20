<template>
    <div class="wrapper">
        <input :value="value" type="text">
    </div>
</template>

<script>
    export default {
        name: 'lunzi-input',
        props: {
            value: {
                type: String
            }
        }
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
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0,0,0,0.5);
    .wrapper {
        font-size: $font-size;
        display: inline-block;
        > input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: 4px;
            padding: 0 8px;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                outline: none;
                box-shadow: inset 0 1px 3px $box-shadow-color;
            }
        }
    }
</style>