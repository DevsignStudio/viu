<template>
    <reveal id="confirmationDialogforPlugin" :disable-overlay="true" class="reveal">
        <div class="col-xd-6" style="padding: 0 8px;">
            <cards v-depth="3">
                <cards-content class="profile">
                    <div class="font-title no-margin dialog-title"></div>
                </cards-content>
                <cards-content class="scrollable">
                    <div class="font-body no-margin dialog-message">
                            
                    </div>
                </cards-content>
                <cards-action>
                    <div class="pull-right">
                        <flat-button type="button" v-unreveal:click="" class="dialog-cancel-button" v-ripple></flat-button>
                        <flat-button type="button" v-unreveal:click="" class="dialog-confirm-button primary" v-ripple></flat-button>
                    </div>
                </cards-action>
            </cards>
        </div>
    </reveal>
</template>

<script>
    import unreveal from "../directives/v-unreveal.js"
    import ripple from "../directives/v-ripple.js";
    import depth  from "../directives/v-depth.js";
    export default {
        data() {
            return {
                title: "",
            }
        },
        directives: {
            unreveal,
            ripple,
            depth,
        },
        methods: {
            confirm() {
                console.log("confirm");
            },
            cancel() {
                console.log("cancel");
            },
        }
    }
</script>
