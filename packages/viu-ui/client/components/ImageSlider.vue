<template>
    <div class="image-slider">
        <slot></slot>
    </div>
</template>

<script>
    import ScrollBar from './ScrollBar.vue';
    import '../plugin/slick/slick.js';
    import '../plugin/slick/slick.css';

    export default {
        props: {
            infinite:{
                default: false,
                type: Boolean,
            }
        },
        mounted() {
            var self = this;
            $(self.$el).slick({
                slidesToShow: 1,
                infinite: self.infinite,
                focusOnSelect: true,
                arrows: false,
            });
        }
    }
</script>
