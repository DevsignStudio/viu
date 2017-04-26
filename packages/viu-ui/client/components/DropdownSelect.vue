<template>
    <div :class="elClass">
        <dropdown-menu>
            <div class="viu-floating-placeholder" v-if="value !== '' && value !== undefined">{{label}}</div>
            <div trigger-menu class="viu-menu-select-description">{{description}}</div>
            <menu-content ref="menuContent">
                <slot></slot>
            </menu-content>
        </dropdown-menu>
        <select :name="name" :disabled="disabled">
            <option :value="value">{{value}}</option>
        </select>
        <icon name="menu-down"></icon>
    </div>
</template>

<script>
import DropdownMenu from './DropdownMenu.vue';
import MenuContent from './MenuContent.vue';
import Helper from '../plugin/class';
export default {
    components: {
        DropdownMenu,
        MenuContent,
    },
    props: {
        name: {
            default: "",
            type: String,
        },
        value: {
            value: "",
        },
        disabled: {
            value: false,
            type: Boolean,
        },
        label: String,
    },
    data() {
        return {
            tempValue: "",
            text: null,
        }
    },
    computed: {
        description() {
            if (this.value === "" || this.value === undefined) {
                return this.label;
            }
            return this.text;
            
        },
        elClass() {
            return {
                "viu-menu-select": true,
                "disabled": this.disabled,
            }
        }
    },
    watch: {
        tempValue(newValue) {
            this.$emit('input', newValue);
        },
        value(newValue) {
            this.resetDropdown();
            this.$emit("valueChange");
        }
    },
    methods: {
        getAllOptions() {
            this.options = this.$children[0].$children[0].$children[0].$children;
        },
        resetDropdown() {
            this.getAllOptions();
            let noMatch = true;
            for (var i = 0; i < this.options.length; i++) {
                Helper.removeClass(this.options[i].$el, 'active');
                if (this.value === this.options[i].value) {
                    Helper.addClass(this.options[i].$el, 'active');
                    this.text = this.options[i].$el.innerHTML;
                    noMatch = false;
                }
            }
            if (noMatch) {
                this.text = null;
            }
        },
        changeMenuSize() {
            this.$refs.menuContent.$el.style.width = this.$el.offsetWidth + "px";
        }
    },
    mounted() {
        let self=  this;
        self.$nextTick(function() {
            self.resetDropdown();
            self.changeMenuSize();
            $(self.$el).resize(function() {
                self.changeMenuSize();
            });
        });
    }
}
</script>
