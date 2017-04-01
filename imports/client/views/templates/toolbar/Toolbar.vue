<template>
    <span>
        <app-bar :title="title" :fixed="true" background-color="theme" v-depth="0">
            <div slot="left">
                <icon-button name="menu" v-open v-ripple="{background: '#fff'}"></icon-button>
            </div>
            <!--<div slot="center">
                <search-box v-model="value"></search-box>
            </div>-->
        </app-bar>
    </span>
</template>

<script>
export default {
    data() {
        return {
            value: "",
            title: "",
        }
    },
    head: {
        title() {
            return {
                inner: this.title,
            }
        },
    },
    methods: {
        updateTitle() {
            if (this.$route) {
                if(this.$route.matched.some(record => record.meta.pageTitle)) {
                    this.title = this.$route.meta.pageTitle
                    this.$emit('updateHead')
                }
            }
        }
    },
    watch: {
        value(newVal) {
            Session.set("searchValue", newVal);
        },
    },
    beforeRouteEnter: (to, from, next) => {
        if(to.matched.some(record => record.meta.pageTitle)) {
            next(vm => {
                vm.title = to.meta.pageTitle;
                vm.$emit('updateHead');
            });
        }
    }
}
</script>
