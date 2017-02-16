<template>
    <span>
        <!--<toolbar :title="title" text-color="white" background-color="theme" :fix="true" v-depth="1">
            <div slot="left">
                <icon-button name="menu" v-ripple v-sidenav:click=""></icon-button>
            </div>
            <div slot="center">
                <search-box v-model="value"></search-box>
            </div>
            <div slot="right">
                <icon-button name="dots-vertical" v-ripple></icon-button>
            </div>
        </toolbar>-->
        <app-bar :title="title" :fixed="true" background-color="theme" v-depth="0">
            <div slot="left">
                <icon-button name="menu" v-open v-ripple="{background: '#fff'}"></icon-button>
            </div>
            <div slot="right">
                <dropdown-menu>
                    <tooltip text="Nizul Zaim">
                        <icon-button name="dots-vertical" v-ripple="{background: '#fff'}" trigger-menu trigger-tooltip></icon-button>
                    </tooltip>
                    <menu-content>
                        <menu-item>Testing</menu-item>
                        <menu-item>Testing</menu-item>
                        <menu-item>Testing</menu-item>
                        <menu-item>Testing</menu-item>
                    </menu-content>
                </dropdown-menu>
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
