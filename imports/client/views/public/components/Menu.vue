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
                            <div class="font-title">Example #1 - Button With Menu</div>
                            <dropdown-menu>
                                <raised-button class="primary" v-ripple trigger-menu><icon name="menu"></icon> Show Menu</raised-button>
                                <menu-content>
                                    <menu-item>Testing</menu-item>
                                    <menu-item>Testing</menu-item>
                                    <menu-item>Testing</menu-item>
                                    <menu-item>Testing</menu-item>
                                </menu-content>
                            </dropdown-menu>
                        </clearfix>
                        <clearfix style="padding: 16px;">
                            <div class="font-title">Example #2 - Icon Button With Menu</div>
                            <dropdown-menu>
                                <icon-button name="dots-vertical" trigger-menu v-ripple></icon-button>
                                <menu-content>
                                    <menu-item>Testing</menu-item>
                                    <menu-item>Testing</menu-item>
                                    <menu-item>Testing</menu-item>
                                    <menu-item>Testing</menu-item>
                                </menu-content>
                            </dropdown-menu>
                        </clearfix>

                        <clearfix style="padding: 16px;">
                            <div class="font-title">Example #3 - Select Menu</div>
                            <div class="col-xd-4">
                                <dropdown-select v-model="selectValue" label="Name">
                                    <menu-option value="nizul">Nizul</menu-option>
                                    <menu-option value="zaim">Zaim</menu-option>
                                    <menu-option value="lili">Lili</menu-option>
                                    <menu-option value="madiha">Madiha</menu-option>
                                    <menu-option value="anuar">Anuar</menu-option>
                                    <menu-option value="zainal_abidin">Zainal Abidin</menu-option>
                                    <menu-option value="sulaiman">Sulaiman</menu-option>
                                </dropdown-select>
                            </div>
                            <raised-button class="accent" v-ripple @click="selectValue = 'madiha'"><icon name="refresh"></icon> Change to Madiha</raised-button>
                        </clearfix>
                    </div>
                </tab-content-item>
                <tab-content-item>
                    <div style="padding: 16px;">
                        <clearfix>
                            <div class="font-title">Example #1 - Button With Menu</div>
                            <highlight-code lang="html">{{code1}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Example #2 - Icon Button With Menu</div>
                            <highlight-code lang="html">{{code2}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Example #3 - Select Menu</div>
                            <highlight-code lang="html">{{code3}}</highlight-code>
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
                code1: `<dropdown-menu>
    <raised-button class="primary" v-ripple trigger-menu><icon name="menu"></icon> Show Menu</raised-button>
    <menu-content>
        <menu-item>Testing</menu-item>
        <menu-item>Testing</menu-item>
        <menu-item>Testing</menu-item>
        <menu-item>Testing</menu-item>
    </menu-content>
</dropdown-menu>`,
                code2: `<dropdown-menu>
    <icon-button name="dots-vertical" trigger-menu v-ripple></icon-button>
    <menu-content>
        <menu-item>Testing</menu-item>
        <menu-item>Testing</menu-item>
        <menu-item>Testing</menu-item>
        <menu-item>Testing</menu-item>
    </menu-content>
</dropdown-menu>`,
                code3: `<div class="col-xd-4">
    <dropdown-select v-model="selectValue" label="Name">
        <menu-option value="nizul">Nizul</menu-option>
        <menu-option value="zaim">Zaim</menu-option>
        <menu-option value="lili">Lili</menu-option>
        <menu-option value="madiha">Madiha</menu-option>
        <menu-option value="anuar">Anuar</menu-option>
        <menu-option value="zainal_abidin">Zainal Abidin</menu-option>
        <menu-option value="sulaiman">Sulaiman</menu-option>
    </dropdown-select>
</div>
<raised-button class="accent"
               v-ripple 
               @click="selectValue = 'madiha'">
    <icon name="refresh"></icon> 
    Change to Madiha
</raised-button>

<script>
    export default {
        data() {
            return {
                selectValue: "",
            }
        },
    }
</script>`,
                selectValue: "",
            }
        },
    }
</script>