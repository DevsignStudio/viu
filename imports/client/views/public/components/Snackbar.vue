<template>
    <div class="appbar-padding" v-wheight>
        <div style="height:100%">
            <tab id="tab" v-depth="1">
                <tab-item v-ripple>View</tab-item>
                <tab-item v-ripple>Code</tab-item>
            </tab>
            <tab-content element="#tab" :size="2">
                <tab-content-item>
                    <div style="min-height:100%">
                        <clearfix style="padding: 16px;">
                            <div class="font-title">Example #1 - Simple Snackbar</div>
                            <raised-button class="primary" @click="example1" v-ripple>Click Here</raised-button>
                        </clearfix>
                        <clearfix style="padding: 16px;">
                            <div class="font-title">Example #2 - Snackbar with Click Callback</div>
                            <raised-button class="primary" @click="example2" v-ripple>Click Here</raised-button>
                        </clearfix>
                        <clearfix style="padding: 16px;">
                            <div class="font-title">Example #3 - Snackbar Change Button Text & Type Error</div>
                            <raised-button class="primary" @click="example3" v-ripple>Click Here</raised-button>
                        </clearfix>
                        <clearfix style="padding: 16px;">
                            <div class="font-title">Example #4 - Snackbar Change Button Text & with Custom Color</div>
                            <raised-button class="primary" @click="example4" v-ripple>Click Here</raised-button>
                        </clearfix>
                    </div>
                </tab-content-item>
                <tab-content-item>
                    <div style="padding: 16px;">
                        <clearfix>
                            <div class="font-title">Example #1 - Simple Snackbar</div>
                            <highlight-code lang="html">{{code1}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Example #2 - Snackbar with Click Callback</div>
                            <highlight-code lang="html">{{code2}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Example #3 - Snackbar Change Button Text & Type Error</div>
                            <highlight-code lang="html">{{code3}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Example #4 - Snackbar Change Button Text & with Custom Color</div>
                            <highlight-code lang="html">{{code4}}</highlight-code>
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
                code3: ``,
                code4: ``,
            }
        },
        methods: {
            example1() {
                this.$snackbar.run("Example 1 Message");
            },
            example2() {
                let self= this;
                self.$snackbar.run("Example 2 Message", ()=> {
                    self.$snackbar.run("Second Message after click")
                });
            },
            example3() {
                this.$snackbar.run("Example 3 Message", ()=>{}, "Retry", "error");
            },
            example4() {
                this.$snackbar.run("Example 4 Message", ()=>{}, "Undo", "color-indigo-200");
            },
        }
    }
</script>