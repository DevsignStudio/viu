<template>
    <div class="peper-cards">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: {
            shadowHover: {
                default: 1,
            }
        },
        mounted() {
            let is_touch_device = function()  {
                return (('ontouchstart' in window)
                    || (navigator.MaxTouchPoints > 0)
                    || (navigator.msMaxTouchPoints > 0));
            }

            let self = this;
            let el = self.$el;
            let $el = $(el);
            self.$nextTick(function() {
                if (!is_touch_device()) {
                    if (self.shadowHover !== 1) {
                        $el.hover(function () {
                            $el.addClass("z-depth z-value-" + self.shadowHover);
                        }, function () {
                            $el.removeClass("z-depth z-value-" + self.shadowHover);
                        });
                    }
                }
            })
        }
    }
</script>
