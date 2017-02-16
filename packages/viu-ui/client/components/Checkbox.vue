<template>
    <div class="viu-checkbox" @click="elOnClick()">
        <input ref="checkbox" :checked="value" @click="thumbOnClick" @change="$emit('input', $event.target.checked)" type="checkbox" :disabled="disabled" :name="name">
        <div ref="ripple" class="viu-checkbox-ripple"></div>
        <icon :name="uncheckIcon" class="viu-checkbox-uncheck"></icon>
        <icon :name="checkIcon" class="viu-checkbox-check"></icon>
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
        disabled: {
            default: false,
        },
        name: {
            default: "",
        },
        checkIcon: {
            default: "checkbox-marked"
        },
        uncheckIcon: {
            default: "checkbox-blank-outline"
        }
    },
    methods: {
        elOnClick() {
            $(this.$refs.checkbox).trigger("click")
        },
        thumbOnClick(el) {
            var $el = $(this.$refs.ripple);
            this.$emit("click");
            $el.addClass("active");
            $el.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (event) {
                $el.removeClass("active");
            });
        }
    },
}
</script>