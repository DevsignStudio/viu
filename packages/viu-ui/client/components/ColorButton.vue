<template>
    <button class="color-button" :type="type">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        type: {
            default: "button",
            type: String,
        },
    },
    mounted() {
        let self = this;
        self.$nextTick(function() {
            $el = $(self.$el);

            $el.hover(function() {
                $(this).addClass("hover");
            }, function() {
                $(this).removeClass("hover");
            });

            
            $el.on("click", function() {
                var $this =$(this);
                self.$emit('click');
                if (self.type=== "submit") {
                    var form = $el.parents("form");
                    self.$emit("submit");
                }
                $this.trigger("mouseleave");
                $this.blur();
                $this.addClass("hover");
                $this.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(e) {
                    $this.removeClass("hover");
                });
            })
        })
    }
}
</script>
