<template>
    <div class="appbar-padding" v-wheight>
        <div style="height:100%">
            <tab id="tab">
                <tab-item v-ripple>View</tab-item>
                <tab-item v-ripple>Code</tab-item>
            </tab>
            <tab-content element="#tab" :size="2">
                <tab-content-item>
                    <div style="min-height:100%">
                        <clearfix style="padding: 16px;">
                            <div class="font-title">Example #1 - Tooltips with Icon Button</div>
                            <tooltip text="Facebook">
                                <icon-button name="facebook" trigger-tooltip class="color-indigo"></icon-button>
                            </tooltip>
                            <tooltip text="Google+">
                                <icon-button name="google-plus" trigger-tooltip class="color-red"></icon-button>
                            </tooltip>
                            <tooltip text="Twitter">
                                <icon-button name="twitter" trigger-tooltip class="color-blue"></icon-button>
                            </tooltip>
                        </clearfix>
                        <clearfix style="padding: 16px;">
                            <div class="font-title">Example #2 - Tooltips with Button</div>
                            <tooltip text="Facebook">
                                <raised-button  trigger-tooltip class="background-indigo color-white">Facebook</raised-button>
                            </tooltip>
                            <tooltip text="Google+">
                                <raised-button trigger-tooltip class="background-red color-white">Google+</raised-button>
                            </tooltip>
                            <tooltip text="Twitter">
                                <raised-button trigger-tooltip class="background-blue color-white">Twitter</raised-button>
                            </tooltip>
                        </clearfix>
                    </div>
                </tab-content-item>
                <tab-content-item>
                    <div style="padding: 16px;">
                        <clearfix>
                            <div class="font-title">Example #1 - Tooltips with Icon Button</div>
                            <highlight-code lang="html">{{code1}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Example #2 - Tooltips with Button</div>
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
                code1: `<tooltip text="Facebook">
    <icon-button name="facebook" trigger-tooltip class="color-indigo"></icon-button>
</tooltip>
<tooltip text="Google+">
    <icon-button name="google-plus" trigger-tooltip class="color-red"></icon-button>
</tooltip>
<tooltip text="Twitter">
    <icon-button name="twitter" trigger-tooltip class="color-blue"></icon-button>
</tooltip>`,
                code2: `<tooltip text="Facebook">
    <raised-button trigger-tooltip class="background-indigo color-white">Facebook</raised-button>
</tooltip>
<tooltip text="Google+">
    <raised-button trigger-tooltip class="background-red color-white">Google+</raised-button>
</tooltip>
<tooltip text="Twitter">
    <raised-button trigger-tooltip class="background-blue color-white">Twitter</raised-button>
</tooltip>`,
            }
        }
    }
</script>