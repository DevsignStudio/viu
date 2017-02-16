<template>
    <div class="peper-switches" @click="elOnClick()">
        <input ref="checkbox" :checked="value" @click="thumbOnClick" @change="$emit('input', $event.target.checked)" type="checkbox" :disabled="disabled" :name="name" >
        <div class="peper-switches-track"></div>
        <div ref="ripple" class="peper-switches-ripple"></div>
        <div class="peper-switches-thumb"></div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                
            },
            disabled: {
                default: false,
            },
            name: {
                default: "",
            }
        },
        methods: {
            elOnClick() {
                $(this.$refs.checkbox).trigger("click")
            },
            thumbOnClick(el) {
                var $el = $(this.$refs.ripple);
                $el.addClass("active");
                this.$emit("click");
                $el.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
                    $el.removeClass("active");
                });
            }
        },
        mounted() {
            let self = this;
            let el = this.$el;
            let $el = $(this.$el);
        },
    }
</script>