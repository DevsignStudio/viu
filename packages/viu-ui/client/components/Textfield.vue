<template>
    <div :class="elClass">
        <input :disabled="disabled || isInfo" ref="input" :type="type" :value="value" @focus="focusInput" @input="updateValue($event.target.value)">
        <div class="viu-textfield-floating-placeholder" @click="focusTextfield">{{placeholder}}</div>
        <div class="viu-textfield-line"></div>
        <div :class="messageClass">{{message}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                default: "text",
            },
            value: {},
            placeholder: {
                default: "",
            },
            message: {
                default: "",
            },
            forceMessage: {
                default: false,
                type: Boolean,
            },
            disabled: {
                default: false,
                type: Boolean,
            },
            isInfo: {
                default: false,
                type: Boolean,
            }
        },
        computed: {
            messageClass() {
                return {
                    'viu-textfield-message': true,
                    'force-message': this.forceMessage,
                }
            },
            elClass() {
                return {
                    'viu-textfield': true,
                    'is-info': this.isInfo,
                }
            }
        },
        mounted() {
            this.checkIfHasValue();
        },
        watch: {
            value(val) {
                this.checkIfHasValue();
            },
        },
        methods: {
            updateValue(val) {
                this.checkIfHasValue();
                this.$emit('input', val);
                this.$emit("change");
            },
            checkIfHasValue() {
                var $el = $(this.$refs.input)
                if (this.value === "") {
                    $el.removeClass("has-text");
                } else {
                    $el.addClass("has-text");
                }
            },
            focusTextfield() {
                $(this.$refs.input).focus();
                $(this.$refs.input).select();
            },
            focusInput() {
                $(this.$refs.input).focus();
                $(this.$refs.input).select();
            }
        }
    }
</script>
