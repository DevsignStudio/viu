<template>
    <div class="viu-menu-item" @click="click"><slot></slot></div>
</template>

<script>
    import Helper from "../plugin/class.js";
    export default {
        methods: {
            click() {
                let ancestor = Helper.findAncestor(this.$el, "viu-menu-content");
                Helper.removeClass(ancestor,"show")
                itemActive  = ancestor.querySelector(".viu-menu-item.active");
                if (itemActive) {
                    Helper.removeClass(itemActive, "active")
                }
                Helper.addClass(this.$el, "active");
                this.$emit("click");
            }
        },
        mounted() {
            let self= this;
            self.$nextTick(() => {
            });
        }
    }
</script>
