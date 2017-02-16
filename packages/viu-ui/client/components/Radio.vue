<template>
    <div class="viu-radio" @click="elOnClick()">
        <input ref="radio" :checked="value === val" @click="thumbOnClick" @change="$emit('input', val)" type="radio" :disabled="disabled" :name="name" :value="val">
        <div ref="ripple" class="viu-radio-ripple"></div>
        <icon :name="uncheckIcon" class="viu-radio-uncheck"></icon>
        <icon :name="checkIcon" class="viu-radio-check"></icon>
    </div>
</template>
<script>
import Icon from "./Icon.vue";
export default {
    components: {
        Icon,
    },
    props: {
        value: {

        },
        val: {
            default: "",
        },
        disabled: {
            default: false,
        },
        name: {
            default: "",
        },
        checkIcon: {
            default: "radiobox-marked"
        },
        uncheckIcon: {
            default: "radiobox-blank"
        }
    },
    methods: {
        elOnClick() {
            $(this.$refs.radio).trigger("click")
        },
        thumbOnClick(el) {
            var $el = $(this.$refs.ripple);
            $el.addClass("active");
            this.$emit("click");
            $el.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (event) {
                $el.removeClass("active");
            });
        }
    },
}
</script>