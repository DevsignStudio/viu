<template>
    <div>
        <div class="reveal row no-gutter center-xs middle-xs" ref="element">
            <div :class="{'reveal-overlay': true, 'has-overlay': hideOverlay}" @click="disable"></div>
            <slot></slot>
        </div>
    </div>
    
</template>

<script>
    export default {
        props: {
            enableOverlayClick: {
                default: true,
            },
            value: {
                default: false,
            }
        },
        computed: {
            hideOverlay() {
                return this.value && !this.enableOverlayClick
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
                if(!this.enableOverlayClick) {
                    return;
                }
                let $el = $(this.$refs.element);
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
                let $el = $(this.$refs.element);
                $el.addClass("front");
                setTimeout(function() {
                    $el.addClass("enable");
                }, 100)
            }
        },
        mounted() {
            this.$nextTick(()=> {
                this.root = this.$root.$el;
                let $el = this.$refs.element;
                this.$el.elementNodes = $el;
                this.childElement = this.root.appendChild($el);
            })
        },
        destroyed() {
            this.childElement.remove();
        }
    }
</script>