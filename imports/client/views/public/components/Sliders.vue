<template>
    <div class="appbar-padding" v-wheight>
        <div style="height:100%">
            <tab id="tab" v-depth="1">
                <tab-item v-ripple>View</tab-item>
                <tab-item v-ripple>Code</tab-item>
            </tab>
            <tab-content element="#tab" :size="2" class="background-grey-100" :swipe="false">
                <tab-content-item>
                    <cards-slider style="padding-top: 10px;">
                        <cards-slider-item>
                            <cards>
                                <cards-image img="/img/a.jpg" v-ripple></cards-image>
                            </cards>
                        </cards-slider-item>
                        <cards-slider-item>
                            <cards>
                                <cards-image img="/img/a.jpg" v-ripple></cards-image>
                            </cards>
                        </cards-slider-item>
                        <cards-slider-item>
                            <cards>
                                <cards-image img="/img/a.jpg" v-ripple></cards-image>
                            </cards>
                        </cards-slider-item>
                        <cards-slider-item>
                            <cards>
                                <cards-image img="/img/a.jpg" v-ripple></cards-image>
                            </cards>
                        </cards-slider-item>
                        <cards-slider-item>
                            <cards>
                                <cards-image img="/img/a.jpg" v-ripple></cards-image>
                            </cards>
                        </cards-slider-item>
                    </cards-slider>
                    <image-slider>
                        <image-slider-item src="/img/a.jpg"></image-slider-item>
                        <image-slider-item src="/img/b.jpg"></image-slider-item>
                        <image-slider-item src="/img/a.jpg"></image-slider-item>
                        <image-slider-item src="/img/b.jpg"></image-slider-item>
                        <image-slider-item src="/img/a.jpg"></image-slider-item>
                        <image-slider-item src="/img/b.jpg"></image-slider-item>
                    </image-slider>
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
                code1:  `<cards-slider>
    <cards-slider-item>
        <cards>
            <cards-image img="/img/a.jpg" v-ripple></cards-image>
        </cards>
    </cards-slider-item>
    <cards-slider-item>
        <cards>
            <cards-image img="/img/a.jpg" v-ripple></cards-image>
        </cards>
    </cards-slider-item>
    <cards-slider-item>
        <cards>
            <cards-image img="/img/a.jpg" v-ripple></cards-image>
        </cards>
    </cards-slider-item>
    <cards-slider-item>
        <cards>
            <cards-image img="/img/a.jpg" v-ripple></cards-image>
        </cards>
    </cards-slider-item>
    <cards-slider-item>
        <cards>
            <cards-image img="/img/a.jpg" v-ripple></cards-image>
        </cards>
    </cards-slider-item>
</cards-slider>`,
                code2: `<image-slider>
    <image-slider-item src="/img/a.jpg"></image-slider-item>
    <image-slider-item src="/img/b.jpg"></image-slider-item>
    <image-slider-item src="/img/a.jpg"></image-slider-item>
    <image-slider-item src="/img/b.jpg"></image-slider-item>
    <image-slider-item src="/img/a.jpg"></image-slider-item>
    <image-slider-item src="/img/b.jpg"></image-slider-item>
</image-slider>`
            }

        }
    }
</script>