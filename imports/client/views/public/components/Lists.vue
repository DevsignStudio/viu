<template>
    <div class="appbar-padding" v-wheight>
        <div style="height: 100%;">
            <tab id="tab"  v-depth="1">
                <tab-item v-ripple>View</tab-item>
                <tab-item v-ripple>Code</tab-item>
            </tab>
            <tab-content element="#tab" :size="2">
                <tab-content-item>
                    <list class="hover">
                        <list-item>
                            Nizul Zaim
                        </list-item>
                        <list-item>
                            Nizul Zaim
                        </list-item>
                        <list-item>
                            Nizul Zaim
                        </list-item>
                    </list>
                    <list class="hover">
                        <list-item>
                            <span slot="left">
                                <icon name="solid"></icon>
                            </span>
                            Nizul Zaim
                        </list-item>
                        <list-item>
                            <span slot="left">
                                <icon name="solid"></icon>
                            </span>
                            Nizul Zaim
                        </list-item>
                        <list-item>
                            <span slot="left">
                                <icon name="solid"></icon>
                            </span>
                            Nizul Zaim
                        </list-item>
                    </list>
                    <list class="hover">
                        <list-item>
                            <span slot="left">
                                <avatar text="Nizul Zaim"></avatar>
                            </span>
                            Nizul Zaim
                        </list-item>
                        <list-item>
                            <span slot="left">
                                <avatar text="Nizul Zaim"></avatar>
                            </span>
                            Nizul Zaim
                        </list-item>
                        <list-item>
                            <span slot="left">
                                <avatar text="Nizul Zaim"></avatar>
                            </span>
                            Nizul Zaim
                        </list-item>
                    </list>
                    <list class="hover">
                        <list-item>
                            <span slot="left">
                                <avatar text="Nizul Zaim"></avatar>
                            </span>
                            Nizul Zaim
                            <span slot="right">
                                <icon name="solid"></icon>
                            </span>
                        </list-item>
                        <list-item>
                            <span slot="left">
                                <avatar text="Nizul Zaim"></avatar>
                            </span>
                            Nizul Zaim
                            <span slot="right">
                                <icon name="solid"></icon>
                            </span>
                        </list-item>
                        <list-item>
                            <span slot="left">
                                <avatar text="Nizul Zaim"></avatar>
                            </span>
                            Nizul Zaim
                            <span slot="right">
                                <icon name="solid"></icon>
                            </span>
                        </list-item>
                    </list> 
                    <list class="hover">
                        <list-item>
                            Two-line item
                            <div class="list-caption">Secondary Text</div>
                        </list-item>
                        <list-item>
                            Two-line item
                            <div class="list-caption">Secondary Text</div>
                        </list-item>
                        <list-item>
                            Two-line item
                            <div class="list-caption">Secondary Text</div>
                        </list-item>
                    </list>
                    <list class="hover">
                        <list-item>
                            <span slot="left">
                                <icon name="solid"></icon>
                            </span>
                            Two-line item
                            <div class="list-caption">Secondary Text</div>
                        </list-item>
                        <list-item>
                            <span slot="left">
                                <icon name="solid"></icon>
                            </span>
                            Two-line item
                            <div class="list-caption">Secondary Text</div>
                        </list-item>
                        <list-item>
                            <span slot="left">
                                <icon name="solid"></icon>
                            </span>
                            Two-line item
                            <div class="list-caption">Secondary Text</div>
                        </list-item>
                    </list>
                    <list class="hover">
                        <list-item>
                            <span slot="left">
                                <avatar text="Nizul Zaim"></avatar>
                            </span>
                            Two-line item
                            <div class="list-caption">Secondary Text</div>
                        </list-item>
                        <list-item>
                            <span slot="left">
                                <avatar text="Nizul Zaim"></avatar>
                            </span>
                            Two-line item
                            <div class="list-caption">Secondary Text</div>
                        </list-item>
                        <list-item>
                            <span slot="left">
                                <avatar text="Nizul Zaim"></avatar>
                            </span>
                            Two-line item
                            <div class="list-caption">Secondary Text</div>
                        </list-item>
                    </list>
                    <list class="hover">
                        <list-item>
                            <span slot="left">
                                <avatar text="Nizul Zaim"></avatar>
                            </span>
                            Two-line item
                            <div class="list-caption">Secondary Text</div>
                            <span slot="right">
                                <icon name="solid"></icon>
                            </span>
                        </list-item>
                        <list-item>
                            <span slot="left">
                                <avatar text="Nizul Zaim"></avatar>
                            </span>
                            Two-line item
                            <div class="list-caption">Secondary Text</div>
                            <span slot="right">
                                <icon name="solid"></icon>
                            </span>
                        </list-item>
                        <list-item>
                            <span slot="left">
                                <avatar text="Nizul Zaim"></avatar>
                            </span>
                            Two-line item
                            <div class="list-caption">Secondary Text</div>
                            <span slot="right">
                                <icon name="solid"></icon>
                            </span>
                        </list-item>
                    </list>
                    <list class="hover">
                        <list-item>
                            Three-line item
                            <div class="list-caption">Secondary Text<br>Secondary Text</div>
                        </list-item>
                        <list-item>
                            Three-line item
                            <div class="list-caption">Secondary Text<br>Secondary Text</div>
                        </list-item>
                        <list-item>
                            Three-line item
                            <div class="list-caption">Secondary Text<br>Secondary Text</div>
                        </list-item>
                    </list>
                    <list class="hover">
                        <list-item>
                            <span slot="left">
                                <icon name="solid"></icon>
                            </span>
                            Three-line item
                            <div class="list-caption">Secondary Text<br>Secondary Text</div>
                        </list-item>
                        <list-item>
                            <span slot="left">
                                <icon name="solid"></icon>
                            </span>
                            Three-line item
                            <div class="list-caption">Secondary Text<br>Secondary Text</div>
                        </list-item>
                        <list-item>
                            <span slot="left">
                                <icon name="solid"></icon>
                            </span>
                            Three-line item
                            <div class="list-caption">Secondary Text<br>Secondary Text</div>
                        </list-item>
                    </list>
                    <list class="hover">
                        <list-item>
                            <span slot="left">
                                <avatar text="Nizul Zaim"></avatar>
                            </span>
                            Three-line item
                            <div class="list-caption">Secondary Text<br>Secondary Text</div>
                        </list-item>
                        <list-item>
                            <span slot="left">
                                <avatar text="Nizul Zaim"></avatar>
                            </span>
                            Three-line item
                            <div class="list-caption">Secondary Text<br>Secondary Text</div>
                        </list-item>
                        <list-item>
                            <span slot="left">
                                <avatar text="Nizul Zaim"></avatar>
                            </span>
                            Three-line item
                            <div class="list-caption">Secondary Text<br>Secondary Text</div>
                        </list-item>
                    </list>
                    <list class="hover">
                        <list-item>
                            <span slot="left">
                                <avatar text="Nizul Zaim"></avatar>
                            </span>
                            Three-line item
                            <div class="list-caption">Secondary Text<br>Secondary Text</div>
                            <span slot="right">
                                <icon name="solid"></icon>
                            </span>
                        </list-item>
                        <list-item>
                            <span slot="left">
                                <avatar text="Nizul Zaim"></avatar>
                            </span>
                            Three-line item
                            <div class="list-caption">Secondary Text<br>Secondary Text</div>
                            <span slot="right">
                                <icon name="solid"></icon>
                            </span>
                        </list-item>
                        <list-item>
                            <span slot="left">
                                <avatar text="Nizul Zaim"></avatar>
                            </span>
                            Three-line item
                            <div class="list-caption">Secondary Text<br>Secondary Text</div>
                            <span slot="right">
                                <icon name="solid"></icon>
                            </span>
                        </list-item>
                    </list>
                </tab-content-item>
                <tab-content-item>
                    <div style="padding: 16px;">
                        <clearfix>
                            <div class="font-title">Single Line Item</div>
                            <highlight-code lang="html">{{code1}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Single Line Item With Icon</div>
                            <highlight-code lang="html">{{code2}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Single Line Item With Avatar</div>
                            <highlight-code lang="html">{{code3}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Single Line Item With Avatar & Icon</div>
                            <highlight-code lang="html">{{code4}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Double Line Item</div>
                            <highlight-code lang="html">{{code5}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Double Line Item With Icon</div>
                            <highlight-code lang="html">{{code6}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Double Line Item With Avatar</div>
                            <highlight-code lang="html">{{code7}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Double Line Item With Avatar & Icon</div>
                            <highlight-code lang="html">{{code8}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Triple Line Item</div>
                            <highlight-code lang="html">{{code9}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Triple Line Item With Icon</div>
                            <highlight-code lang="html">{{code10}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Triple Line Item With Avatar</div>
                            <highlight-code lang="html">{{code11}}</highlight-code>
                        </clearfix>
                        <clearfix>
                            <div class="font-title">Triple Line Item With Avatar & Icon</div>
                            <highlight-code lang="html">{{code12}}</highlight-code>
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
                code1: `<list class="hover">
    <list-item>
        Nizul Zaim
    </list-item>
    <list-item>
        Nizul Zaim
    </list-item>
    <list-item>
        Nizul Zaim
    </list-item>
</list>`,
                code2: `<list class="hover">
    <list-item>
        <span slot="left">
            <icon name="solid"></icon>
        </span>
        Nizul Zaim
    </list-item>
    <list-item>
        <span slot="left">
            <icon name="solid"></icon>
        </span>
        Nizul Zaim
    </list-item>
    <list-item>
        <span slot="left">
            <icon name="solid"></icon>
        </span>
        Nizul Zaim
    </list-item>
</list>`,
                code3: `<list class="hover">
    <list-item>
        <span slot="left">
            <avatar text="Nizul Zaim"></avatar>
        </span>
        Nizul Zaim
    </list-item>
    <list-item>
        <span slot="left">
            <avatar text="Nizul Zaim"></avatar>
        </span>
        Nizul Zaim
    </list-item>
    <list-item>
        <span slot="left">
            <avatar text="Nizul Zaim"></avatar>
        </span>
        Nizul Zaim
    </list-item>
</list>`,
                code4: `<list class="hover">
    <list-item>
        <span slot="left">
            <avatar text="Nizul Zaim"></avatar>
        </span>
        Nizul Zaim
        <span slot="right">
            <icon name="solid"></icon>
        </span>
    </list-item>
    <list-item>
        <span slot="left">
            <avatar text="Nizul Zaim"></avatar>
        </span>
        Nizul Zaim
        <span slot="right">
            <icon name="solid"></icon>
        </span>
    </list-item>
    <list-item>
        <span slot="left">
            <avatar text="Nizul Zaim"></avatar>
        </span>
        Nizul Zaim
        <span slot="right">
            <icon name="solid"></icon>
        </span>
    </list-item>
</list> `,
                code5: `<list class="hover">
    <list-item>
        Two-line item
        <div class="list-caption">Secondary Text</div>
    </list-item>
    <list-item>
        Two-line item
        <div class="list-caption">Secondary Text</div>
    </list-item>
    <list-item>
        Two-line item
        <div class="list-caption">Secondary Text</div>
    </list-item>
</list>`,
                code6: `<list class="hover">
    <list-item>
        <span slot="left">
            <icon name="solid"></icon>
        </span>
        Two-line item
        <div class="list-caption">Secondary Text</div>
    </list-item>
    <list-item>
        <span slot="left">
            <icon name="solid"></icon>
        </span>
        Two-line item
        <div class="list-caption">Secondary Text</div>
    </list-item>
    <list-item>
        <span slot="left">
            <icon name="solid"></icon>
        </span>
        Two-line item
        <div class="list-caption">Secondary Text</div>
    </list-item>
</list>`,
                code7: `<list class="hover">
    <list-item>
        <span slot="left">
            <avatar text="Nizul Zaim"></avatar>
        </span>
        Two-line item
        <div class="list-caption">Secondary Text</div>
    </list-item>
    <list-item>
        <span slot="left">
            <avatar text="Nizul Zaim"></avatar>
        </span>
        Two-line item
        <div class="list-caption">Secondary Text</div>
    </list-item>
    <list-item>
        <span slot="left">
            <avatar text="Nizul Zaim"></avatar>
        </span>
        Two-line item
        <div class="list-caption">Secondary Text</div>
    </list-item>
</list>`,
                code8: `<list class="hover">
    <list-item>
        <span slot="left">
            <avatar text="Nizul Zaim"></avatar>
        </span>
        Two-line item
        <div class="list-caption">Secondary Text</div>
        <span slot="right">
            <icon name="solid"></icon>
        </span>
    </list-item>
    <list-item>
        <span slot="left">
            <avatar text="Nizul Zaim"></avatar>
        </span>
        Two-line item
        <div class="list-caption">Secondary Text</div>
        <span slot="right">
            <icon name="solid"></icon>
        </span>
    </list-item>
    <list-item>
        <span slot="left">
            <avatar text="Nizul Zaim"></avatar>
        </span>
        Two-line item
        <div class="list-caption">Secondary Text</div>
        <span slot="right">
            <icon name="solid"></icon>
        </span>
    </list-item>
</list>`,
                code9: `<list class="hover">
    <list-item>
        Three-line item
        <div class="list-caption">Secondary Text<br>Secondary Text</div>
    </list-item>
    <list-item>
        Three-line item
        <div class="list-caption">Secondary Text<br>Secondary Text</div>
    </list-item>
    <list-item>
        Three-line item
        <div class="list-caption">Secondary Text<br>Secondary Text</div>
    </list-item>
</list>`,
                code10: `<list class="hover">
    <list-item>
        <span slot="left">
            <icon name="solid"></icon>
        </span>
        Three-line item
        <div class="list-caption">Secondary Text<br>Secondary Text</div>
    </list-item>
    <list-item>
        <span slot="left">
            <icon name="solid"></icon>
        </span>
        Three-line item
        <div class="list-caption">Secondary Text<br>Secondary Text</div>
    </list-item>
    <list-item>
        <span slot="left">
            <icon name="solid"></icon>
        </span>
        Three-line item
        <div class="list-caption">Secondary Text<br>Secondary Text</div>
    </list-item>
</list>`,
                code11: `<list class="hover">
    <list-item>
        <span slot="left">
            <avatar text="Nizul Zaim"></avatar>
        </span>
        Three-line item
        <div class="list-caption">Secondary Text<br>Secondary Text</div>
    </list-item>
    <list-item>
        <span slot="left">
            <avatar text="Nizul Zaim"></avatar>
        </span>
        Three-line item
        <div class="list-caption">Secondary Text<br>Secondary Text</div>
    </list-item>
    <list-item>
        <span slot="left">
            <avatar text="Nizul Zaim"></avatar>
        </span>
        Three-line item
        <div class="list-caption">Secondary Text<br>Secondary Text</div>
    </list-item>
</list>`,
                code12: `<list class="hover">
    <list-item>
        <span slot="left">
            <avatar text="Nizul Zaim"></avatar>
        </span>
        Three-line item
        <div class="list-caption">Secondary Text<br>Secondary Text</div>
        <span slot="right">
            <icon name="solid"></icon>
        </span>
    </list-item>
    <list-item>
        <span slot="left">
            <avatar text="Nizul Zaim"></avatar>
        </span>
        Three-line item
        <div class="list-caption">Secondary Text<br>Secondary Text</div>
        <span slot="right">
            <icon name="solid"></icon>
        </span>
    </list-item>
    <list-item>
        <span slot="left">
            <avatar text="Nizul Zaim"></avatar>
        </span>
        Three-line item
        <div class="list-caption">Secondary Text<br>Secondary Text</div>
        <span slot="right">
            <icon name="solid"></icon>
        </span>
    </list-item>
</list>`,
            }
        }
    }
</script>