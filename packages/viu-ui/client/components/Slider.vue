<template>
    <div class="viu-slider-wrapper">
        <div class="viu-slider">
            <slot></slot>
        </div>
        <div class="next-button" v-show="hasNextButton">
            <flat-button class="color-white" type="button" @click="nextButtonClick" v-ripple>{{nextButtonText}}</flat-button>
        </div>
    </div>
</template>

<script>
    import '../plugin/slick/slick.js';
    import '../plugin/slick/slick.css';

    export default {
        props: {
            nextText: {
                default: "Next",
                type: String,   
            },
            finishText: {
                default: "Finish",
                type: String,   
            },
            hasNextButton: {
                default: false,
                type: Boolean,
            },
            dots: {
                default: true,
                type: Boolean,
            },
            infinite: {
                default: false,
                type: Boolean,
            },
            autoplay: {
                default: false,
                type: Boolean,
            },
            autoplaySpeed: {
                default: 300,
                type: Number,
            }
        },
        data() {
            return {
                lastSlide: false,
            }
        },
        computed: {
            nextButtonText() {
                if (this.lastSlide) {
                    return this.finishText;
                }
                return this.nextText;
            }
        },
        mounted() {
            let self = this;

            self.$nextTick(()=> {
                self.$slider = $(self.$el).find(".viu-slider");
                self.$slider.slick({
                    dots: self.dots,
                    speed: 300,
                    slidesToShow: 1,
                    arrows: false,
                    infinite: self.infinite,
                    autoplay: self.autoplay,
                    autoplaySpeed: self.autoplaySpeed,
                });
                self.$slider.on('afterChange', function(slick, currentSlide){
                    self.$emit("slideChange", currentSlide.currentSlide);
                    self.lastSlide = (currentSlide.slideCount -1) === currentSlide.currentSlide;
                });
            })
        },
        methods: {
            nextButtonClick() {
                let self = this;
                self.$slider.slick("slickNext");

                if (self.lastSlide) {
                    self.$emit("finished");
                }
            }
        }
    }
</script>