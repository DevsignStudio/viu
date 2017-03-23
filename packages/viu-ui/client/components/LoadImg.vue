<template>
    <div class="load-img">
        <img :src="imgSmall" class="img-small">
    </div>
</template>

<script>
    import * as Vibrant from 'node-vibrant';
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
        methods: {
            injectImg() {
                let self = this;
                var placeholder = $(self.$el),
                    small = $(self.$el.children[0]);
                var imgLarge = new Image();
                imgLarge.src = self.img;
                placeholder.append(imgLarge);
                imgLarge.onload = function () {
                    if (!imgLarge.classList.contains('loaded')) {
                        setTimeout(() => {
                            imgLarge.classList.add('loaded');
                            self.checkDone = true;
                        }, 500)
                    }
                };
            }
        },
        mounted() {
            let self = this;
            var id = Math.random().toString(36).substr(2, 5); 
            self.$nextTick(function () {
                let self = this;
                var placeholder = $(self.$el),
                    small = $(self.$el.children[0]);
                var img = new Image();
                img.src = self.imgSmall;

               
                
                img.onload = function () {
                    Vibrant.from(img.src).getPalette((err, palette) => {
                        let rgb = palette.Vibrant._rgb;
                        let hex = Vibrant.Util.rgbToHex(rgb[0], rgb[1], rgb[2])
                        placeholder.css({
                            "padding-bottom": (img.height / img.width * 100) + "%",
                            'background': hex,
                        })
                    });

                    if (placeholder.isOnScreen()) {
                        self.injectImg();
                    } else {
                        placeholder.parents(".simplebar").each(function () {
                            $(this.SimpleBar.getScrollElement()).on('scroll.load-img-' + id, function (e) {
                                if (placeholder.isOnScreen() && !self.checkDone) {
                                    self.injectImg();
                                    $(this).off("scroll.load-img-"+ id);
                                }
                            });
                        })
                    }
                    
                };



            });
        }
    }
</script>