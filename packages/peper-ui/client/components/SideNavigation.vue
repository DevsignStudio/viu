<template>
    <div class="col-xs-5 position-fixed-xs left peper-side-navigation">
        <full-height :class="fullHeightClass">
            <div slot="header">
                <slot name="header" style="width:100%; display: block;"></slot>
            </div>
            <div class="peper-side-navigation-content">
                <slot></slot>
            </div>
        </full-height>
    </div>
</template>

<script>
import { Vue } from 'meteor/akryum:vue';

export default {
    props: {
        backgroundColor: {
            default: "white",
            type: String,
        },
        textColor: {
            default: "grey-900",
            type: String,
        },
        zIndex: {
            default: "900",
            type: String,
        }
    },
    computed: {
        fullHeightClass() {
            return "background-" + this.backgroundColor;
        }
    },
    mounted() {
        let self= this;
        self.$nextTick(function() {
            let $overlay = $('<div class="peper-side-navigation-overlay"></div>');
            if ($(".peper-side-navigation-overlay").length === 0) {
                $(this.$el).parent().append($overlay);
            }
        })

    }
};
</script>
