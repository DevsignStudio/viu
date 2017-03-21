<template>
    <div class="content-slider">
        <slot></slot>
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
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 3,
                infinite: true,
                focusOnSelect: true,
                arrows: false,
                responsive: [{
                        breakpoint: 1440,
                        settings: {
                            slidesToShow: 3,
                            centerPadding: '40px',
                            infinite: true,
                        }
                    },{
                        breakpoint: 1280,
                        settings: {
                            slidesToShow: 3,
                            centerPadding: '40px',
                            infinite: true,
                        }
                    },{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            centerPadding: '40px',
                            infinite: true,                            
                        }
                    },{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            centerPadding: '40px',
                            infinite: true,                            
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            centerPadding: '40px',
                            infinite: false,                          
                        }
                    }
                ]
            });

        }
    }
</script>

<style>
    .content-slider-item {
        padding: 0 8px;
    }

    .content-slider-item .inner {
        height: 100%;
    }
</style>