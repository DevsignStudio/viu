<template>
    <div class="appbar-padding" v-wheight>
        <div style="height:100%">
            <tab id="tab"  v-depth="1">
                <tab-item v-ripple>View</tab-item>
                <tab-item v-ripple>Code</tab-item>
            </tab>
            <tab-content element="#tab" :size="2">
                <tab-content-item>
                    <div style="padding:20px">
                        <div class="font-title">Example #1 - Raised Button</div>
                        <clearfix style="padding-bottom: 20px;">
                            <raised-button>Button</raised-button>
                            <raised-button class="primary" v-ripple>Button</raised-button>
                            <raised-button class="accent" v-ripple>Button</raised-button>
                            <raised-button v-ripple disabled>Button</raised-button>
                        </clearfix>
                        <div class="font-title">Example #2 - Flat Button</div>
                        <clearfix style="padding-bottom: 20px;">
                            <flat-button>Button</flat-button>
                            <flat-button class="primary" v-ripple>Button</flat-button>
                            <flat-button class="accent" v-ripple>Button</flat-button>
                            <flat-button v-ripple disabled>Button</flat-button>
                        </clearfix>
                        <div class="font-title">Example #3 - Color Button</div>
                        <clearfix style="padding-bottom: 20px;">
                            <color-button>Button</color-button>
                            <color-button class="primary" v-ripple>Button</color-button>
                            <color-button class="accent" v-ripple>Button</color-button>
                            <color-button v-ripple disabled>Button</color-button>
                        </clearfix>
                        <div class="font-title">Example #4 - Advance Button</div>
                        <clearfix style="padding-bottom: 20px;">
                            <raised-button class="primary" type="button" v-ripple>Button</raised-button>
                            <raised-button class="primary" v-ripple><icon name="facebook"></icon> Facebook</raised-button>
                            <raised-button class="primary" link="/components/cards" v-ripple>Link Components Card</raised-button>
                            <raised-button class="primary" @click="click" v-ripple>Events Click</raised-button>
                            <form>
                                <raised-button class="primary" type="submit" @submit="submit" v-ripple>Submit</raised-button>
                            </form>
                        </clearfix> 
                    </div>
                    
                </tab-content-item>
                <tab-content-item>
                    <div style="padding: 16px;">
                        <clearfix>
                            <div class="font-title">Example #1 - Raised Button</div>
                            <highlight-code lang="html">{{code1}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Example #2 - Flat Button</div>
                            <highlight-code lang="html">{{code2}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Example #3 - Color Button</div>
                            <highlight-code lang="html">{{code3}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Example #4 - Advance Button</div>
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
                code1: `<raised-button>Button</raised-button>
<raised-button class="primary" v-ripple>Button</raised-button>
<raised-button class="accent" v-ripple>Button</raised-button>
<raised-button v-ripple disabled>Button</raised-button>`,
                code2: `<flat-button>Button</flat-button>
<flat-button class="primary" v-ripple>Button</flat-button>
<flat-button class="accent" v-ripple>Button</flat-button>
<flat-button v-ripple disabled>Button</flat-button>`,
                code3: `<color-button>Button</color-button>
<color-button class="primary" v-ripple>Button</color-button>
<color-button class="accent" v-ripple>Button</color-button>
<color-button v-ripple disabled>Button</color-button>`,
                code4: `<raised-button class="primary" type="button" v-ripple>Button</raised-button>
<raised-button class="primary" v-ripple><icon name="facebook"></icon> Facebook</raised-button>
<raised-button class="primary" link="/components/cards" v-ripple>Link Components Card</raised-button>
<raised-button class="primary" @click="click" v-ripple>Events Click</raised-button>
<form>
    <raised-button class="primary" type="submit" @submit="submit" v-ripple>Submit</raised-button>
</form>

<script>
    import {Snackbar } from "meteor/skynightz93:viu-ui";
    export default {
        methods: {
            submit() {
                Snackbar.run("Button has been submit");
            },
            click() {
                Snackbar.run("Button has been click");
            }
        }
    }
</script>`,
            }
        },
        methods: {
            submit() {
                this.$snackbar.run("Button has been submit");
            },
            click() {
                this.$snackbar.run("Button has been click");
            }
        }
    }
</script>