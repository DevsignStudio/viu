<template>
    <div class="row no-margin no-gutter" style="height:100%;">
        <router-view class="col-xs-5" style="height:100%;" name="navigation"></router-view>
        <div class="col-xs" style="height:100%; overflow: hidden;">
            <div style="height:100%;">
                <scroll-bar>
                    <span>
                        <router-view name="toolbar"></router-view>
                        <router-view ></router-view>
                    </span>
                </scroll-bar>
            </div>
        </div>
        <confirmation-dialog></confirmation-dialog>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$router.beforeEach((to, from, next) => {
                setTimeout(()=>{
                    next();
                }, 250)
            })
        }
        
    }
</script>