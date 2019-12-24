<template>
    <div>
        <g-row gutter="20">
            <g-col span="12"
                   :ipad="{span:8}"
                   :narrow-pc="{span:4}"
                   :pc="{span:2}"
                   :wide-pc="{span:1}"
            >
                <div class="demoCol">1</div>
            </g-col>
            <g-col span="12"
                   :ipad="{span:16}"
                   :narrow-pc="{span:20}"
                   :pc="{span:22}"
                   :wide-pc="{span:23}"
            >
                <div class="demoCol">10</div>
            </g-col>
        </g-row>
    </div>
</template>

<script>
    import Row from "../../../src/row";
    import Col from "../../../src/col";

    export default {
        components: {
            "g-row": Row,
            "g-col": Col
        }
    };
</script>

<style scoped lang="scss">
    .demoRow {
        margin: 10px 0;
        display: flex;
        flex-wrap: wrap;
    }
    .demoCol {
        height: 50px;
        border-radius: 4px;
        border: 1px solid #eeeeee;
        background: #e1bee7;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>