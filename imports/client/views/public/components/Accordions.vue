<template>
    <div class="appbar-padding" v-wheight>
        <div style="height:100%">
            <tab id="tab">
                <tab-item v-ripple>View</tab-item>
                <tab-item v-ripple>Code</tab-item>
            </tab>
            <tab-content element="#tab" :size="2">
                <tab-content-item>
                    <div>
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
                    <div style="height:4000px;">DIV</div>
                </tab-content-item>
            </tab-content>
        </div>
    </div>
</template>