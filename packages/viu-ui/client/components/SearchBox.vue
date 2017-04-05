<template>
    <form class="search-box" @submit.prevent="search">
        <input type="text" ref="input" placeholder="Search" @focus="enable" @blur="disable" @keyup="enable" @click="enable" :value="value" >
        <icon-button name="magnify" class="visible-xs visible-xd pull-right" @click="enable" v-ripple></icon-button>
        <icon-button ref="toggler" :name="buttonIcon" class="search-button pull-right" @mousedown="buttonToggler" @mouseup="mouseUp" v-ripple></icon-button>
        <icon-button name="arrow-left" class="close-button visible-xs visible-xd" @click="disable" v-ripple></icon-button>
    </form>
</template>

<script>
import IconButton from "./IconButton.vue";
export default {
    props: {
        value: {},
    },
    components: {
        IconButton,
    },
    data() {
        return {
            buttonIcon: "magnify",
            disableDisable: false,
        }
    },
    methods: {
        enable() {
            let $el = $(this.$el);
            let self = this;
            $el.addClass("enable");
            $(this.$refs.input).focus();
            self.buttonIcon = "close";
        },
        disable() {
            if (!this.disableDisable) {
                let $el = $(this.$el);
                $el.removeClass("enable");
                let self = this;
                this.$emit('input', this.$refs.input.value);
                if (this.$refs.input.value === "") {
                    self.buttonIcon = "magnify";
                }
            }
        },
        search() {
            let $el = $(this.$el);
            $el.addClass("enable");
            $(this.$refs.input).blur();
            this.$emit('submit');
        },
        buttonToggler() {
            $el.addClass("enable");
            if(this.$refs.input.value !== "") {
                this.$refs.input.value = "";
                this.$emit('input', this.$refs.input.value);
            }
            this.disableDisable = true;
        },
        mouseUp() {
            this.disableDisable = false;
            $(this.$refs.input).focus();
        },
        clearText() {
            this.$refs.input.value = "";
            this.$emit('input', this.$refs.input.value);
        }
    },
    mounted() {
        let $el = $(this.$el);
        let self = this;
        $("*").bind("scroll.searchbox", function() {
            $el.removeClass("enable");
            $(self.$refs.input).blur();
        })

        $(window).keydown(function(e){
            if ((e.ctrlKey || e.metaKey) && e.keyCode === 70) {
                e.preventDefault();
                if ($el.hasClass("enable")) {
                    self.disable();
                    $(self.$refs.input).blur();
                } else {
                    self.enable();
                }
                
            }
        });
    }
}
</script>