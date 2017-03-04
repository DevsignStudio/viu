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
                            <div class="font-title">Example #1 - Simple Confirmation</div>
                            <raised-button class="primary" @click="confirmation1" v-ripple><icon name="delete"></icon> Delete</raised-button>
                        </clearfix>
                        <clearfix style="padding: 16px;">
                            <div class="font-title">Example #1 - Confirmation with Custom Text</div>
                            <raised-button class="primary" @click="confirmation2" v-ripple><icon name="send"></icon> Send</raised-button>
                        </clearfix>
                    </div>
                </tab-content-item>
                <tab-content-item>
                    <div style="padding: 16px;">
                        <clearfix>
                            <div class="font-title">Example #1 - Simple Confirmation</div>
                            <highlight-code lang="html">{{code1}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Example #2 - Confirmation with Custom Text</div>
                            <highlight-code lang="html">{{code1}}</highlight-code>
                        </clearfix>
                    </div>
                </tab-content-item>
            </tab-content>
        </div>
    </div>
</template>

<script>
    import { Snackbar, Confirmation } from "meteor/skynightz93:viu-ui";
    export default {
        data() {
            return {
                code1: `<raised-button class="primary" @click="confirmation1" v-ripple>
    <icon name="delete"></icon> Delete
</raised-button>

<script>
    import { Snackbar, Confirmation } from "meteor/skynightz93:viu-ui";
    export default {
        methods:{
            confirmation1() {
                Confirmation.run("Are you sure want to delete", ()=>{
                    Snackbar.run("Confirm delete");
                }, ()=>{
                    Snackbar.run("Cancel delete");
                });
            },
        }
    }
</script>`,
                code2: `<raised-button class="primary" @click="confirmation2" v-ripple>
    <icon name="send"></icon> Send
</raised-button>

<script>
    import { Snackbar, Confirmation } from "meteor/skynightz93:viu-ui";
    export default {
        methods:{
            confirmation2() {
                Confirmation.run("Are you sure want to send this message?", ()=>{
                    Snackbar.run("Confirm send");
                }, ()=>{
                    Snackbar.run("Don't send'");
                }, "Send Message", "Send", "Don't Send");
            }
        }
    }
</script>`,
            }
        },
        methods:{
            confirmation1() {
                Confirmation.run("Are you sure want to delete", ()=>{
                    Snackbar.run("Confirm delete");
                }, ()=>{
                    Snackbar.run("Cancel delete");
                });
            },
            confirmation2() {
                Confirmation.run("Are you sure want to send this message?", ()=>{
                    Snackbar.run("Confirm send");
                }, ()=>{
                    Snackbar.run("Don't send'");
                }, "Send Message", "Send", "Don't Send");
            }
        }
    }
</script>