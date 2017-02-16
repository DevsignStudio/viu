<template>
    <div :class="itemClass" background="#c1c1c1">
        <span v-if="!divider"><i v-if="icon || showIcon" :class="iconClass"></i> {{text}}</span>
    </div>
</template>

<script>
// import "../directives/v-ripple";

export default {
    props: {
        text: null,
        icon: null,
        showIcon: Boolean,
        divider: Boolean,
        disabled: Boolean,
    },
    computed: {
        itemClass() {
            return "peper-menu-item " + this.ifDivider + " " + this.ifDisable;
        },
        iconClass() {
            return "mdi mdi-" + this.icon;
        },
        ifDivider() {
            if (this.divider) {
                return "divider";
            }

            return "";
        },
        ifDisable() {
            if (this.disabled) {
                return "disabled";
            }

            return "";
        },
    }
};
</script>
