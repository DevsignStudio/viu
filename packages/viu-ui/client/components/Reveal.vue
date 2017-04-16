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
            value: {
                default: false,
            }
        },
        watch: {
            value(newVal) {
                if (newVal){
                    this.enable();
                } else {
                    this.disable();
                }
            }
        },
        methods: {
            disable() {
                if(!this.hasOverlay) {
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
                this.$emit('input', false)
            },
            enable() {
                let $el = $(this.$el);
                $el.addClass("front");
                setTimeout(function() {
                    $el.addClass("enable");
                }, 100)
            }
        }
    }
</script>