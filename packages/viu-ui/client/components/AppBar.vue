<template>
    <div :class="elClass">
        <slot name="before-content"></slot>
        <div :class="backgroundClass" :style="backgroundStyle"></div>
        <div class="contain">
            <slot name="left"></slot>
            <div class="title">
                {{ title }}
            </div>
            <div class="center">
                <slot name="center"></slot>
            </div>
            <div class="pull-right" style="position: initial">
                <slot name="right"></slot>
            </div>
        </div>
        <slot name="after-content"></slot>
    </div>
</template>
<script>
export default {
    props: {
        title: null,
        fixed: {
            default: false,
        },
        backgroundColor: {
            default: 'white',
        },
        hexBackground: {
            default: false,
        },
        noDepthBefore: {
            type: String,
            default: undefined,
        },
        noBgBefore: {
            type: String,
            default: undefined,
        },
        noTitleBefore: {
            type: String,
            default: undefined,
        },
    },
    computed: {
        elClass() {
            return {
                'viu-app-bar': true,
                'fixed': this.fixed,
            }
        },
        backgroundClass() {
            if (this.hexBackground) {
                return 'background';
            }
            return 'background background-' + this.backgroundColor;
        },
        backgroundStyle() {
            if (this.hexBackground) {
                return {
                    backgroundColor: this.backgroundColor,
                }
            }
            return {};
        }
    }
}
</script>