<template>
    <div class="load-img">
        <img :src="imgSmall" class="img-small">
    </div>
</template>

<script>
export default {
    props: {
        img: {
            default: "",
            type: String,
        },
        imgSmall: {
            default: "",
            type: String,
        }
    },
    mounted() {
        let self = this;

        self.$nextTick(function() {
            let self = this;
            var placeholder = $(self.$el),
                small = $(self.$el.children[0]);
            var img = new Image();
            img.src = self.imgSmall;
            placeholder.css({ "padding-bottom": (img.height/img.width * 100) + "%" })
            small.css({filter: "blur("+ placeholder.outerWidth() /15 +"px)"})
            self.$el.children[0].classList.add("loaded")
            img.onload = function() {
                small.addClass('loaded');
            };

            var imgLarge = new Image();
            var id = Math.random().toString(36).substr(2, 5);
            imgLarge.src = self.img;
            imgLarge.onload = function() {
                if (!imgLarge.classList.contains('loaded')) {
                    let checkPosition = function() {
                        if(placeholder.isOnScreen()) {
                            placeholder.parents(".optiscroll").off("scroll.load-img-" + id);
                            window.setTimeout(function(){
                                imgLarge.classList.add('loaded');
                                small.css({filter: "none"})
                            }, 500);
                        }
                    }

                    checkPosition();
                    placeholder.parents(".optiscroll").on('scroll.load-img-' + id, function (ev) {
                        checkPosition();
                    });
                }
            };
            placeholder.append(imgLarge);
        });
    }
}
</script>
