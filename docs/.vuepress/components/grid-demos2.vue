<template>
    <div>
        <g-row gutter="10" class="demoRow">
            <g-col span="12">
                <div class="demoCol">12</div>
            </g-col>
            <g-col span="10" offset="2">
                <div class="demoCol">10</div>
            </g-col>
        </g-row>
        <g-row gutter="10" class="demoRow">
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6" offset="1">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6" offset="5">
                <div class="demoCol">6</div>
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