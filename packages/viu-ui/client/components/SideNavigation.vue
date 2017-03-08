<template>
    <div :class="elClass" v-depth="1">
        <slot></slot>
    </div>
</template>

<script>
    import Helper from "../plugin/class.js"
    export default {
        props: {
            isFixLg: {
                default: false,
            }
        },
        computed: {
            elClass() {
                return {
                    'viu-side-navigation': true,
                    'fixed-on-lg': this.isFixLg
                }
            }
        },
        mounted() {
            let self = this;
            this.$nextTick(function() {
                var $selfEl = $(self.$el);
                if($selfEl.next(".viu-side-navigation-overlay").length === 0) {
                    var $el = $('<div class="viu-side-navigation-overlay"></div>');
                    $selfEl.after($el);
                }
                
                $el = $selfEl.next();
                $el.on("click", function() {
                    $selfEl.removeClass("open");
                });
            })

            // self.$router.beforeEach((to, from, next) => {
            //     setTimeout(()=>{
            //         next();
            //     }, 250)
            // })
            
        }
    }
</script>