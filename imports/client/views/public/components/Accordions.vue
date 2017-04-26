<template>
    <div class="appbar-padding" v-wheight>
        <div style="height:100%">
            <tab id="tab"  v-depth="1">
                <tab-item v-ripple>View</tab-item>
                <tab-item v-ripple>Code</tab-item>
            </tab>
            <tab-content element="#tab" :size="2">
                <tab-content-item>
                    <div style="padding: 16px;">
                        <div class="font-title">Example #1 - Multiple Open</div>
                        <accordion>
                            <accordion-item>
                                <accordion-item-header>Header</accordion-item-header>
                                <accordion-item-content>Content</accordion-item-content>
                            </accordion-item>
                            <accordion-item>
                                <accordion-item-header>Header</accordion-item-header>
                                <accordion-item-content>Content</accordion-item-content>
                            </accordion-item>
                        </accordion>
                    </div>

                    <div style="padding: 16px;">
                        <div class="font-title">Example #2 - Single Open</div>
                        <accordion :collapsible="true">
                            <accordion-item>
                                <accordion-item-header>Header</accordion-item-header>
                                <accordion-item-content>Content</accordion-item-content>
                            </accordion-item>
                            <accordion-item>
                                <accordion-item-header>Header</accordion-item-header>
                                <accordion-item-content>Content</accordion-item-content>
                            </accordion-item>
                        </accordion>
                    </div>
                </tab-content-item>
                <tab-content-item>
                    <div style="padding: 16px;">
                        <clearfix>
                            <div class="font-title">Example #1 - Multiple Open</div>
                            <highlight-code lang="html">{{code1}}</highlight-code>
                        </clearfix>
                    </div>
                    <div style="padding: 16px;">
                        <clearfix>
                            <div class="font-title">Example #2 - Single Open</div>
                            <highlight-code lang="html">{{code2}}</highlight-code>
                        </clearfix>
                    </div>
                </tab-content-item>
            </tab-content>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                code1: ``,
                code2: ``,
            }
        },
    }
</script>