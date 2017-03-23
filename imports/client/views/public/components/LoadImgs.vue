<template>
    <div class="appbar-padding" v-wheight>
        <div style="height:100%">
            <tab id="tab" v-depth="1">
                <tab-item v-ripple>View</tab-item>
                <tab-item v-ripple>Code</tab-item>
            </tab>
            <tab-content element="#tab" :size="2">
                <tab-content-item>
                    <div style="padding: 16px;">
                        <div class="row center-xs">
                            <div class="col-sm-fluid-8">
                                <div>
                                    <clearfix>
                                        <div class="font-title">Example #1 - Using as Img</div>
                                    </clearfix>
                                    <load-img class="img" img="/img/a.jpg" img-small="/img/a-small.jpg"></load-img>
                                    <load-img class="img" img="/img/b.jpg" img-small="/img/b-small.jpg"></load-img>
                                    <load-img class="img" img="/img/a.jpg" img-small="/img/a-small.jpg"></load-img>
                                    <load-img class="img" img="/img/b.jpg" img-small="/img/b-small.jpg"></load-img>
                                    <load-img class="img" img="/img/a.jpg" img-small="/img/a-small.jpg"></load-img>
                                    <load-img class="img" img="/img/b.jpg" img-small="/img/b-small.jpg"></load-img>
                                    <load-img class="img" img="/img/a.jpg" img-small="/img/a-small.jpg"></load-img>
                                    <load-img class="img" img="/img/b.jpg" img-small="/img/b-small.jpg"></load-img>
                                    <clearfix>
                                        <div class="font-title">Example #2 - Using in Card</div>
                                    </clearfix>
                                    <cards>
                                        <cards-image img="/img/a.jpg" img-small="/img/a-small.jpg" v-ripple></cards-image>
                                        <divider></divider>
                                        <cards-action>
                                            <flat-button v-ripple class="primary">OK</flat-button>
                                            <flat-button v-ripple>Cancel</flat-button>
                                            <div class="pull-right">
                                                <icon-button name="heart" class="accent" v-ripple></icon-button>
                                            </div>
                                        </cards-action>
                                    </cards>
                                    <cards>
                                        <cards-image img="/img/b.jpg" img-small="/img/b-small.jpg" v-ripple></cards-image>
                                        <divider></divider>
                                        <cards-action>
                                            <flat-button v-ripple class="primary">OK</flat-button>
                                            <flat-button v-ripple>Cancel</flat-button>
                                            <div class="pull-right">
                                                <icon-button name="heart" class="accent" v-ripple></icon-button>
                                            </div>
                                        </cards-action>
                                    </cards>
                                    <cards>
                                        <cards-image img="/img/a.jpg" img-small="/img/a-small.jpg" v-ripple></cards-image>
                                        <divider></divider>
                                        <cards-action>
                                            <flat-button v-ripple class="primary">OK</flat-button>
                                            <flat-button v-ripple>Cancel</flat-button>
                                            <div class="pull-right">
                                                <icon-button name="heart" class="accent" v-ripple></icon-button>
                                            </div>
                                        </cards-action>
                                    </cards>
                                    <cards>
                                        <cards-image img="/img/b.jpg" img-small="/img/b-small.jpg" v-ripple></cards-image>
                                        <divider></divider>
                                        <cards-action>
                                            <flat-button v-ripple class="primary">OK</flat-button>
                                            <flat-button v-ripple>Cancel</flat-button>
                                            <div class="pull-right">
                                                <icon-button name="heart" class="accent" v-ripple></icon-button>
                                            </div>
                                        </cards-action>
                                    </cards>
                                    <cards>
                                        <cards-image img="/img/a.jpg" img-small="/img/a-small.jpg" v-ripple></cards-image>
                                        <divider></divider>
                                        <cards-action>
                                            <flat-button v-ripple class="primary">OK</flat-button>
                                            <flat-button v-ripple>Cancel</flat-button>
                                            <div class="pull-right">
                                                <icon-button name="heart" class="accent" v-ripple></icon-button>
                                            </div>
                                        </cards-action>
                                    </cards>
                                    <cards>
                                        <cards-image img="/img/b.jpg" img-small="/img/b-small.jpg" v-ripple></cards-image>
                                        <divider></divider>
                                        <cards-action>
                                            <flat-button v-ripple class="primary">OK</flat-button>
                                            <flat-button v-ripple>Cancel</flat-button>
                                            <div class="pull-right">
                                                <icon-button name="heart" class="accent" v-ripple></icon-button>
                                            </div>
                                        </cards-action>
                                    </cards>
                                </div>
                            </div>
                        </div>
                    </div>
                </tab-content-item>
                <tab-content-item>
                    <div style="padding: 16px;">
                        <clearfix>
                            <div class="font-title">Example #1 - Using as Img</div>
                            <highlight-code lang="html">{{code1}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Example #2 - Using in Card</div>
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
                checkboxData: false,
                code1: `<load-img class="img" img="/img/a.jpg" img-small="/img/a-small.jpg"></load-img>`,
                code2: `<cards>
    <cards-image img="/img/a.jpg" img-small="/img/a-small.jpg" v-ripple></cards-image>
    <divider></divider>
    <cards-action>
        <flat-button v-ripple class="primary">OK</flat-button>
        <flat-button v-ripple>Cancel</flat-button>
        <div class="pull-right">
            <icon-button name="heart" class="accent" v-ripple></icon-button>
        </div>
    </cards-action>
</cards>`,
            }
        }
    }
</script>

<style>
    .img {
        margin-bottom: 8px;
    }
</style>