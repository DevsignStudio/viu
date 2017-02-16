<template>
    <div class="reveal row no-gutter center-xs middle-xs">
        <div :class="{'reveal-overlay': true, 'has-overlay': hasOverlay}" @click="disable"></div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            hasOverlay: {
                default: true,
            },
            disableOverlay: {
                default: false,
            }
        },
        methods: {
            disable() {
                if(this.disableOverlay) {
                    return;
                }
                let $el = $(this.$el);
                $el.removeClass("enable");
                this.$emit("close");
                $el.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (event) {
                    if (!$el.hasClass("enable")) {
                        $el.removeClass("front");
                    }
                });
            },
            enable() {
                let $el = $(this.$el);
                $el.addClass("front");
                $el.addClass("enable");
            }
        }
    }
</script>