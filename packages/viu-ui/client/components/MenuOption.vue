<template>
    <menu-item @click="click">
        <slot></slot>
    </menu-item>
</template>

<script>
export default {
    props: {
        value: [String, Number, Boolean],
    },
    mounted() {
        let self= this;
        self.$nextTick(function(){
        });
    },
    methods: {
        click() {
            // console.log(this);
            this.$parent.$parent.$parent.$parent.tempValue = this.value;
            this.$parent.$parent.$parent.$parent.text = this.$el.innerText;
        }
    }
}
</script>
