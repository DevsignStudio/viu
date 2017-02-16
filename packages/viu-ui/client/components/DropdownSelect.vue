<template>
    <div class="viu-menu-select">
        <dropdown-menu>
            <div class="viu-floating-placeholder" v-if="text">{{label}}</div>
            <div trigger-menu class="viu-menu-select-description">{{text || label}}</div>
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
    watch: {
        tempValue(newValue) {
            this.$emit('input', newValue);
        },
        value(newValue) {
            this.resetDropdown();
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
                    break;
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
