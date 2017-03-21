<template>
    <div class="simplebar">
        <slot></slot>
    </div>
</template>

<script>
    import SimpleBar from '../plugin/simplebar.js';
    import 'simplebar/umd/simplebar.css';
    export default {
        mounted() {
            let self= this;
            self.$nextTick(function() {
                self.sbar = new SimpleBar(self.$el);
                function getStyle(oElm, strCssRule){
                    var strValue = "";
                    if(document.defaultView && document.defaultView.getComputedStyle){
                        strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
                    }
                    else if(oElm.currentStyle){
                        strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
                            return p1.toUpperCase();
                        });
                        strValue = oElm.currentStyle[strCssRule];
                    }
                    return strValue;
                }
                // self.sbar.getContentElement().style.width = "calc(100% + 8px)";
                $(self.sbar.getContentElement()).resize(function() {

                });

                $(self.$el).resize(function() {
                    self.sbar.recalculate();
                })
            })
        }
    }
</script>
