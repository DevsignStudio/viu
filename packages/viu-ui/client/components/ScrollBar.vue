<template>
    <div class="simplebar">
        <slot></slot>
    </div>
</template>

<script>
    // import SimpleBar from '../plugin/simplebar.js';
    // import 'simplebar/umd/simplebar.css';
    // export default {
    //     mounted() {
    //         let self= this;
    //         self.$nextTick(function() {
    //             self.sbar = new SimpleBar(self.$el);
    //             function getStyle(oElm, strCssRule){
    //                 var strValue = "";
    //                 if(document.defaultView && document.defaultView.getComputedStyle){
    //                     strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
    //                 }
    //                 else if(oElm.currentStyle){
    //                     strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
    //                         return p1.toUpperCase();
    //                     });
    //                     strValue = oElm.currentStyle[strCssRule];
    //                 }
    //                 return strValue;
    //             }
    //             padding = parseInt(getStyle(self.$el.parentNode, "padding-top")) + parseInt(getStyle(self.$el.parentNode, "padding-bottom"));
    //             self.$el.style.height = (self.$el.parentNode.offsetHeight - padding ) + "px";
    //             self.contentHeight = self.sbar.getScrollElement().childNodes[0].offsetHeight;
    //
    //             $(self.sbar.getScrollElement().childNodes[0]).resize(function() {
    //                 let diff = self.contentHeight - this.offsetHeight;
    //                 self.$el.style.height = (self.$el.offsetHeight - diff) + "px";
    //                 self.contentHeight = this.offsetHeight;
    //                 self.sbar.recalculate();
    //             });
    // 
    //             $(self.$el).resize(function() {
    //                 self.sbar.recalculate();
    //             })
    //             $(window).on('resize', function() {
    //                 self.sbar.recalculate();
    //                 let currentHeight = self.$el.parentNode.offsetHeight;
    //                 if (currentHeight > self.sbar.getScrollElement().childNodes[0].offsetHeight){
    //                     currentHeight = self.sbar.getScrollElement().childNodes[0].offsetHeight
    //                 }
    //                 self.$el.style.height = currentHeight + "px";
    //             })
    //         })
    //     }
    // }
</script>
