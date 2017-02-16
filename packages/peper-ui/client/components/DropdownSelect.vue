<template>
    <div class="peper-select">
        <select :name="name" ref="select" @focus="toggleMenu">
            <slot></slot>
        </select>
        <div class="peper-select-label">
            {{label}}
        </div>
        <div class="peper-select-text" @click="toggleMenu">
            {{text}}
            <icon name="menu-down"></icon>    
        </div>
        <div class="popup-menu" ref="menu">
            <div v-for="option in options" :class="{'popup-menu-item': true, 'active': text===option}"  @click="toggleMenuFromItem">{{option}}</div>
        </div>

    </div>
</template>

<script>
    import Icon from "./Icon.vue";
    export default {
        props: {
            name: {
                default: "",
            },
            disabled: {
                default: false,
                type: Boolean,
            },
            label: {
                default: "",
            },
            value: "",
        },
        data() {
            return {
                selectedIndex: 0,
                numberOfOptions: 0,
                options: [],
                focus: false,
                text: "",
                selected: null,
                $select: null,
            }
        },
        watch: {
            selectedIndex(newValue) {
                let self = this;
                self.$refs.select.selectedIndex = newValue;
                self.selected = this.$select.children("option:selected")[0];
                self.text = self.selected.text;
                self.$emit('input', self.selected.value);
            },
            value(val) {
                let self = this;
                let selectedIndex = 0;
                let i = 0;
                this.$select.children("option").each(function() {
                    if (this.value === val) {
                        selectedIndex = i;
                    }
                    i++;
                })
                self.selectedIndex = selectedIndex;
            }
        },
        mounted() {
            let self = this;
            let $el = $(self.$el);
            this.$select = $(self.$refs.select);
            let $options = this.$select.children("option")
            self.numberOfOptions = $options.length;

            $options.each(function() {
                self.options.push(this.text);
            });
            self.selected = this.$select.children("option:selected")[0];
            self.text = self.selected.text;
            self.$emit('input', self.selected.value);

            var enableClick = false;
            $(document).on("mouseup.menu", function (e) {
                if ($(self.$select).hasClass('focus') && enableClick) {
                    inActive();
                    return;
                }
                enableClick = true;
            });

            var inActive = function () {
                $(self.$select).removeClass('focus');
                enableClick = false;
            }

            $("*").not(".popup-menu").bind("scroll.menu", function () {
                inActive();
            })
        },
        methods: {
            toggleMenu() {
                if(this.$select.hasClass("focus")) {
                    this.$select.removeClass("focus");
                } else {
                    this.$select.addClass("focus");
                }
            },
            toggleMenuFromItem(event) {
                let self = this;
                self.selectedIndex = $(self.$refs.menu).children(".popup-menu-item").index(event.target);
                $(this.$refs.select).removeClass("focus");;
            },
        }
    }
</script>