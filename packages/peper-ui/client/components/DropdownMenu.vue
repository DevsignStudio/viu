<template>
<div class="peper-menu showOnTrigger">
    <slot></slot>
</div>
</template>

<script>
export default {
    props: {
        trigger: {default: null},
        openOn: {default: 'click'},
        left: {
            type: Boolean,
            default: true,
        },
        top: {
            type: Boolean,
            default: true,
        },
        makeCenter: null,
        hasGap: null,
    },
    mounted() {
        let self = this;
        let $thisEl = $(this.$el);
        let divideBy = 1;
        let gap = 0;

        if (self.openOn === "always") {
            $thisEl.removeClass("showOnTrigger");
        }

        if (self.makeCenter !== undefined) {
            divideBy = 2;
        }

        if (self.hasGap) {
            gap = 4;
        }

        let menuPosition = function() {
            if (self.trigger) {
                let $trigger = $(self.trigger);
                let $posLeft;
                let $posTop;

                var CheckPos= function(cb) {
                    let offset = $trigger.offset()
                    $posLeft = offset.left;
                    $posTop = offset.top;

                    if (!self.top) {
                        $posTop = $posTop + gap;
                    } else {
                        $posTop = $posTop + $trigger.outerHeight() - gap - $thisEl.outerHeight();
                    }

                    if (!self.left) {
                        $posLeft = $posLeft + $trigger.outerWidth() - gap - $thisEl.outerWidth();
                    } else {
                        $posLeft = $posLeft + gap;
                    }

                    $thisEl.css({
                        top: $posTop,
                        left: $posLeft,
                    })
                    window.setTimeout(function() {
                        cb();
                    }, 100);
                }

                CheckPos(function() {});
                if (!self.top) {
                    $thisEl.addClass('bottom');
                } else {
                    $thisEl.addClass('top');
                }

                if (!self.left) {
                    $thisEl.addClass('right');
                } else {
                    $thisEl.addClass('left');
                }

                let $children = $thisEl.children();
                let childrenLength = $children.length;
                $trigger.bind(self.openOn  + '.menu', function() {
                    CheckPos(function() {
                        $thisEl.toggleClass('show');
                    });
                });

                var enableClick = false;
                $(document).on("mouseup.menu", function(e) {
                    if ($thisEl.hasClass('show') && enableClick) {
                        inActive();
                        return;
                    }
                    enableClick = true;
                });

                var inActive = function() {
                    $thisEl.removeClass('show');
                    enableClick = false;
                }

                $("*").bind("scroll.menu", function() {
                    inActive();
                })
            }
        }

        self.$nextTick(function() {
            menuPosition();

            $(document).on("resize",function() {
                menuPosition();
            })
        })
    }
};
</script>
