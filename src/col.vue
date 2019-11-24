<template>
    <div class="col" :class="[`col-${span}`,offset && `offset-${offset}`]">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'lunzi-col',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            }
        }
    }
</script>
<style scoped lang="scss">
    .col {
        height: 100px;
        background: grey;
        width: 50%;
        border: 1px solid red;
        $class: col-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $class: offset-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
    }
</style>