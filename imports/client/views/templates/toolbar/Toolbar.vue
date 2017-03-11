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
        </app-bar>
    </span>
</template>

<script>
export default {
    mounted() {
        this.$nextTick(()=> {
            // this.updateTitle();
        })
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
        '$route'(to, from){
            // this.updateTitle();
        }
    },
    beforeRouteEnter: (to, from, next) => {
        if(to.matched.some(record => record.meta.pageTitle)) {
            console.log(to.meta.pageTitle);
            next(vm => {
                vm.title = to.meta.pageTitle;
                vm.$emit('updateHead');
            });
        }
    }
}
</script>
