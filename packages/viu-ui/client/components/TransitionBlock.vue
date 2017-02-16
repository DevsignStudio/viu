<template>
<div>
    <transition name="fade">
        <div v-show="show">
            <slot></slot>
        </div>

    </transition>
    <transition name="slide-fade">
        <div id="loadingHere" style="position: absolute; top: 0; left: 0; z-index:2; width: 100%;" v-show="showLoader">
            <div class="loader">
                <svg class="circular" viewBox="25 25 50 50">
                    <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
                </svg>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
export default {
    props: {
        show: {
            default: false,
        }
    },
    data() {
        return {
            showLoader: false,
        }
    },
    watch: {
        show(newValue) {
            if (newValue) {
                this.showLoader = false;
                window.setTimeout(function(){
                    $(this.$el).find(".loader > .circular").attr("class", "circular pause");
                    $(this.$el).find(".loader > .circular > .path").attr("class", "path pause");
                }, 500);
            }
        }
    },
    mounted() {
        var clientHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        var self = this;
        var $el = $(self.$el);

        self.$nextTick(function() {
            self.showLoader = true;
        })

        let siblingHeight = 0;
        $el.siblings().each(function() {
            siblingHeight += $(this).outerHeight();
        });

        var myHeight = clientHeight - siblingHeight;
        // $el.children("#loadingHere").css({
        //     "min-height": myHeight
        // });
    }
}
</script>
