<template>
    <div>
        <g-tabs :selected.sync="selectedTab">
            <g-tabs-head>
                <template slot="actions">
                    <button>settings</button>
                </template>
                <g-tabs-item name="cars">汽车</g-tabs-item>
                <g-tabs-item name="finance" disabled>财经</g-tabs-item>
                <g-tabs-item name="sports">体育</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="cars">汽车相关资讯</g-tabs-pane>
                <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
                <g-tabs-pane name="sports">体育相关资讯</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
    </div>
</template>
<script>
    import Tabs from '../../../src/tabs'
    import TabsHead from '../../../src/tabs-head'
    import TabsBody from '../../../src/tabs-body'
    import TabsItem from '../../../src/tabs-item'
    import TabsPane from '../../../src/tabs-pane'

    export default {
        components: {
            'g-tabs': Tabs,
            'g-tabs-head': TabsHead,
            'g-tabs-body': TabsBody,
            'g-tabs-item': TabsItem,
            'g-tabs-pane': TabsPane,
        },
        data() {
            return {
                selectedTab: 'cars',
            }
        }
    }
</script>