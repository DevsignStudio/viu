<template>
    <div class="appbar-padding" v-wheight>
        <div style="height:100%">
            <tab id="tab"  v-depth="1">
                <tab-item v-ripple>View</tab-item>
                <tab-item v-ripple>Code</tab-item>
            </tab>
            <tab-content element="#tab" :size="2"  class="background-grey-100">
                <tab-content-item>
                    <div style="padding: 16px;">
                        <div class="row center-xs">
                            <div class="col-md-fluid-8">
                                <cards>
                                    <cards-image img="/img/a.jpg" v-ripple></cards-image>
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
                        
                        <div class="row center-xs">
                            <div class="col-md-fluid-8">
                                <cards>
                                    <cards-content class="profile">
                                        <avatar text="Nizul Zaim"></avatar>
                                        <div class="profile-title">Nizul Zaim</div>
                                        <div class="profile-subhead">Sometext Here</div>
                                    </cards-content>
                                    <cards-image img="/img/a.jpg" v-ripple></cards-image>
                                    <divider></divider>
                                    <cards-action>
                                        <div class="pull-right">
                                            <checkbox v-model="checkboxData" class="pink" check-icon="heart" uncheck-icon="heart-outline"></checkbox>
                                        </div>
                                    </cards-action>
                                </cards>
                            </div>
                        </div>
                        <div class="row center-xs">
                            <div class="col-md-fluid-8">
                                <cards>
                                    <cards-content class="profile">
                                        <avatar text="Nizul Zaim"></avatar>
                                        <div class="profile-title">Nizul Zaim</div>
                                        <div class="profile-subhead">Sometext Here</div>
                                    </cards-content>
                                    <cards-image img="/img/a.jpg" v-ripple></cards-image>
                                    <cards-content>
                                        <div class="font-body no-margin font-medium">
                                            Testing Text Something
                                        </div>
                                        <div class="font-body no-margin">
                                            Wow this look amazing bla bla
                                        </div>
                                    </cards-content>                                    
                                    <divider></divider>
                                    <cards-action>
                                        <icon-button name="heart" class="primary" v-ripple></icon-button>
                                        <dropdown-menu>
                                            <icon-button name="share" class="primary" v-ripple trigger-menu></icon-button>
                                            <menu-content>
                                                <menu-item>Facebook</menu-item>
                                                <menu-item>Google+</menu-item>
                                                <menu-item>Twitter</menu-item>
                                            </menu-content>
                                        </dropdown-menu>
                                    </cards-action>
                                </cards>
                            </div>
                        </div>
                        <div class="row center-xs">
                            <div class="col-md-fluid-8">
                                <cards>
                                    <cards-content class="profile">
                                        <avatar text="Nizul Zaim"></avatar>
                                        <div class="profile-title">Nizul Zaim</div>
                                        <div class="profile-subhead">Sometext Here</div>
                                    </cards-content>
                                    <cards-image img="/img/a.jpg" v-ripple></cards-image>
                                    <cards-action>
                                        <icon-button name="heart" class="primary" v-ripple></icon-button>
                                        <dropdown-menu>
                                            <icon-button name="share" class="primary" v-ripple trigger-menu></icon-button>
                                            <menu-content>
                                                <menu-item>Facebook</menu-item>
                                                <menu-item>Google+</menu-item>
                                                <menu-item>Twitter</menu-item>
                                            </menu-content>
                                        </dropdown-menu>
                                    </cards-action>
                                    <divider></divider>
                                    <cards-content>
                                        <div class="font-body no-margin font-medium">
                                            Testing Text Something
                                        </div>
                                        <div class="font-body no-margin">
                                            Wow this look amazing bla bla
                                        </div>
                                    </cards-content>                                    
                                </cards>
                            </div>
                        </div>
                    </div>
                </tab-content-item>
                <tab-content-item>
                    <div style="padding: 16px;">
                        <clearfix>
                            <div class="font-title">Example #1</div>
                            <highlight-code lang="html">{{code1}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Example #2</div>
                            <highlight-code lang="html">{{code2}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Example #3</div>
                            <highlight-code lang="html">{{code3}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Example #4</div>
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
                checkboxData: false,
                code1:  `<cards>
    <cards-image img="/img/a.jpg" v-ripple></cards-image>
    <divider></divider>
    <cards-action>
        <flat-button v-ripple class="primary">OK</flat-button>
        <flat-button v-ripple>Cancel</flat-button>
        <div class="pull-right">
            <icon-button name="heart" class="accent" v-ripple></icon-button>
        </div>
    </cards-action>
</cards>`,
                code2: ``,
                code3:``,
                code4: ``
            }
        }
    }
</script>

