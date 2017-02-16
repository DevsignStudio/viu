<template>
    <span class="viu-menu">
        <slot></slot>
    </span>
</template>

<script>
    import Helper from "../plugin/class.js"
    export default {
        mounted() {
            let self = this;
            self.$nextTick(() => {
                self.root = self.$root.$el;
                self.triggerElement = self.$el.querySelector("[trigger-menu]");
                self.childElement = self.$el.querySelector(".viu-menu-content")
                self.childElement = self.root.appendChild(self.childElement);
                self.reposition();

                self.triggerElement.addEventListener("mousedown", function(e) {
                    self.reposition();
                });
                self.triggerElement.addEventListener("click", function(e) {
                    Helper.addClass(self.childElement, "show");
                    let ancestor = Helper.findAncestor(self.$el, "simplebar-scroll-content");
                    if(!ancestor) {
                        ancestor = Helper.findAncestor(self.$el, "simplebar");
                    }
                    Helper.one(ancestor,"scroll", function(e) {
                        Helper.removeClass(self.childElement, "show");
                    })
                    e.stopPropagation();
                    Helper.one(self.$root.$el, 'click', function(e) {
                        Helper.removeClass(self.childElement, "show");
                    })
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

                Helper.removeClass(this.childElement, "left-top");
                Helper.removeClass(this.childElement, "left-bottom");
                Helper.removeClass(this.childElement, "right-top");
                Helper.removeClass(this.childElement, "right-bottom");
                if (document.body.offsetWidth - offsetLeft > this.childElement.offsetWidth) {
                    this.childElement.style.left = offsetLeft + 'px';
                    this.childElement.style.right = 'auto';
                    this.frontClass = 'left';
                } else {
                    this.childElement.style.left = 'auto';
                    this.childElement.style.right = offsetRight+ 'px';
                    this.frontClass = 'right';
                }

                if (offsetBottom - this.childElement.offsetHeight > 0) {
                    this.childElement.style.top = offsetTop + 'px';
                    this.childElement.style.bottom = 'auto';
                    this.backClass = 'top';
                } else {
                    this.childElement.style.top = 'auto';
                    this.childElement.style.bottom = offsetBottom + "px";
                    this.backClass = 'bottom';
                }

                Helper.addClass(this.childElement, this.frontClass + '-' + this.backClass);
            }
        }
    }
</script>
