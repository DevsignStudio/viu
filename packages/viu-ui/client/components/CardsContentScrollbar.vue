<template>
    <div style="width: 100px;max-height: 300px;">
        <scroll-bar style="height: 100%" ref="scrollbar">
            <cards-content ref="cardscontent" >
                <slot></slot>
            </cards-content>
        </scroll-bar>
    </div>
</template>

<script>
    import ScrollBar from './ScrollBar.vue';
    import CardsContent from './CardsContent.vue';
    import Helper from "../plugin/class.js";
    export default {
        component: {
            ScrollBar,
            CardsContent,
        },
        methods: {
            changeSize() {
                let siblings = this.$el.parentNode.childNodes;
                let revealEl = this.findAncestor(this.$el, "reveal");
                if (revealEl) {
                    let height = 0;
                    siblings.forEach((item) => {
                        if (item.offsetHeight !== undefined && !Helper.hasClass(item, "resize-triggers")) {
                            height += item.offsetHeight;
                        }
                    })
                    let ancestorHeight = revealEl.offsetHeight;
                    this.$el.style.maxHeight = (ancestorHeight - height + this.$el.offsetHeight - 50) + "px";
                }
                this.$el.style.width = this.$el.parentNode.offsetWidth + "px";
                this.setScrollbarSize();
            },
            setScrollbarSize() {
                let contentEl = this.$refs.cardscontent.$el;
                if (parseInt(this.$el.style.maxHeight) < contentEl.offsetHeight) {
                    this.$refs.scrollbar.$el.style.height = this.$el.style.maxHeight;
                    return;
                }
                this.$refs.scrollbar.$el.style.height = contentEl.offsetHeight + "px";
            },
            findAncestor(el, cls) {
                while ((el = el.parentElement) && !el.classList.contains(cls));
                return el;
            }
        },
        mounted() {
            let self = this;
    
            self.$nextTick(function() {
                self.changeSize();
    
                $(window).resize(function() {
                    self.changeSize();
                });
    
                $(self.$refs.cardscontent.$el).resize(function() {
                    self.changeSize();
                });
            });
        }
    }
</script>

<style>
    .no-padding{
        padding: 0;
    }
</style>