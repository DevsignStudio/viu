<template>
    <div>
        <div class="testing">
            <div class="inner">
                your content
            </div>
        </div>
        <div class="testing">
            <div class="inner">
                your content
            </div>
        </div>
        <div class="testing">
            <div class="inner">
                your content
            </div>
        </div>
        <div class="testing">
            <div class="inner">
                your content
            </div>
        </div>
        <div class="testing">
            <div class="inner">
                your content
            </div>
        </div>
        <div class="testing">
            <div class="inner">
                your content
            </div>
        </div>
        <div class="testing">
            <div class="inner">
                your content
            </div>
        </div>
    </div>
</template>

<script>
    import ScrollBar from './ScrollBar.vue';
    import '../plugin/slick/slick.js';
    import '../plugin/slick/slick.css';

    export default {
        mounted() {
            var self = this;
            $(self.$el).slick({
                centerPadding: '60px',
                slidesToShow: 3,
                infinite: false,
                variableWidth: true,
                arrows: false,
                focusOnSelect: true,
                responsive: [{
                        breakpoint: 768,
                        settings: {
                            centerPadding: '40px',
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    }
                ]
            });

        }
    }
</script>

<style >
    .testing {
        height: 300px;
        padding: 8px;
        width: 360px;
    }

    .testing .inner {
        height: 100%;
        background: #111;
    }
</style>