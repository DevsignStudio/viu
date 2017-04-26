<template>
    <div :class="elClass">
        <textarea rows="1" v-if="type === 'multiline'" :autocomplete="autocomplete" :autocorrect="autocorrect" :autocapitalize="autocapitalize" :spellcheck="spellcheck" :disabled="disabled || isInfo" @focus="focusInput" ref="textarea" @input="updateValue($event.target.value)" v-model="textareaData"></textarea>
        <input v-if="type!== 'multiline'" :disabled="disabled || isInfo" ref="input" :type="type" :autocomplete="autocomplete" :autocorrect="autocorrect" :autocapitalize="autocapitalize" :spellcheck="spellcheck" :value="value" @focus="focusInput" @input="updateValue($event.target.value)">
        <div class="viu-textfield-floating-placeholder" @click="focusInput">{{placeholder}}</div>
        <div class="viu-textfield-line"></div>
        <div :class="messageClass">{{message}}</div>
    </div>
</template>


<script>
    import autosize from "../plugin/autosize.min.js";
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
            },
            autocomplete: {
                default: "",
                type: String,
            },
            autocorrect: {
                default: "",
                type: String,
            },
            autocapitalize: {
                default: "",
                type: String,
            },
            spellcheck: {
                default:"",
                type: String,
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
                    'multiline': this.isMultiline,
                }
            },
            isMultiline() {
                if (this.type === "multiline") {
                    return true;
                }
                return false;
            },
            textareaData() {
                return this.value;
            }
        },
        mounted() {
            this.checkIfHasValue();
            autosize(this.$refs.textarea);
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
    
                if (this.isMultiline) {
                    $el = $(this.$refs.textarea);
                }
                if (this.value === "") {
                    $el.removeClass("has-text");
                } else {
                    $el.addClass("has-text");
                }
    
            },
            focusInput() {
                if (this.isMultiline) {
                    $(this.$refs.textarea).focus();
                    $(this.$refs.textarea).select();
                } else {
                    $(this.$refs.input).focus();
                    $(this.$refs.input).select();
                }
            }
        }
    }
</script>
