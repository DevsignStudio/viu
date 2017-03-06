<template>
    <span>
        <app-bar :title="title" :fixed="true" background-color="transparent" :hex-background="true" v-depth="0">
            <div slot="left">
                <icon-button name="menu" v-open v-ripple="{background: '#fff'}"></icon-button>
            </div>
        </app-bar>
    </span>
</template>

<script>
export default {
    mounted() {
        if(this.$route.matched.some(record => record.meta.fixToolbar)) {
        }
        this.updateTitle();
    },
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
            if(this.$route.matched.some(record => record.meta.pageTitle)) {
                this.title = this.$route.meta.pageTitle
                this.$emit('updateHead')
            }
        }
    },
    watch: {
        value(newVal) {
            console.log("hello");
            Session.set("searchValue", newVal);
        },
        '$route'(to, from){
            this.updateTitle();
        }
    }
}
</script>
