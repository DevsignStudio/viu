<template>
    <span class="tooltip-wrapper">
        <slot></slot>
        <div class="viu-tooltip">{{text}}</div>
    </span>
</template>
<script>
    import Helper from "../plugin/class.js"
    export default {
        props: {
            text: String,
        },
        mounted() {
            let self= this;
            self.$nextTick(()=> {
                self.root = self.$root.$el;
                self.triggerElement = self.$el.querySelector("[trigger-tooltip]");
                self.childElement = self.$el.querySelector(".viu-tooltip");
                self.childElement = self.root.appendChild(self.childElement);
                var timer;
                self.triggerElement.addEventListener("mouseover", function(e) {
                    self.reposition();
                    timer = setTimeout(()=> {
                        Helper.addClass(self.childElement, 'active');
                    }, 200);
                });

                self.triggerElement.addEventListener("mouseout", function(e) {
                    clearTimeout(timer);
                    Helper.removeClass(self.childElement, 'active');
                });
            });
            
        },
        methods: {
            reposition() {
                var bodyRect = document.body.getBoundingClientRect(),
                elemRect = this.triggerElement.getBoundingClientRect(),
                offsetTop   = elemRect.top - bodyRect.top,
                offsetLeft = elemRect.left - bodyRect.left,
                offsetRight = bodyRect.right - elemRect.right,
                offsetBottom = bodyRect.bottom - elemRect.bottom;

                Helper.removeClass(this.childElement, "top");
                Helper.removeClass(this.childElement, "bottom");

                //not maintain for now
                // if (document.body.offsetWidth - offsetLeft > this.childElement.offsetWidth) {
                //     this.childElement.style.left = offsetLeft + 'px';
                //     this.childElement.style.right = 'auto';
                //     this.frontClass = 'left';
                // } else {
                //     this.childElement.style.left = 'auto';
                //     this.childElement.style.right = offsetRight+ 'px';
                //     this.frontClass = 'right';
                // }

                this.childElement.style.left = (offsetLeft + (this.triggerElement.offsetWidth/2) - (this.childElement.offsetWidth/2))  + 'px';

                if (offsetBottom - this.childElement.offsetHeight > 24) {
                    this.childElement.style.top = (offsetTop + this.triggerElement.offsetHeight) + 'px';
                    this.childElement.style.bottom = 'auto';
                    this.backClass = 'top';
                } else {
                    this.childElement.style.top = 'auto';
                    this.childElement.style.bottom = (offsetBottom + this.triggerElement.offsetHeight) + "px";
                    this.backClass = 'bottom';
                }

                Helper.addClass(this.childElement, this.backClass);
            }
        }
    }
</script>