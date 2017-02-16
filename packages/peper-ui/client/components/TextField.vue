<template>
    <div class="peper-textfield">
        <input ref="input" :type="type" :value="value" @focus="focusInput" @input="updateValue($event.target.value)">
        <div class="peper-textfield-floating-placeholder" @click="focusTextfield">{{placeholder}}</div>
        <div class="peper-textfield-line"></div>
        <div class="peper-textfield-bottom-text"></div>
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