<template>
    <div class="main-container">
        <div class="swipe-tabs-container" ref="tabContainer">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import ScrollBar from './ScrollBar.vue';
    import '../plugin/slick/slick.js';
    import '../plugin/slick/slick.css';
    export default {
        props: {
            element: String,
            size: {
                default: 3,
                type: Number,
            },
        },
        mounted(){
            var self= this;
            self.$nextTick(()=> {
                let siblingsHeight = 0;
                $(self.$el).siblings().each(function() {
                    siblingsHeight += $(this).outerHeight();
                });
                $(self.$el).find(".swipe-tab-content").each(function() {
                    this.style.height = (self.$el.parentNode.offsetHeight - siblingsHeight -2) + "px";
                    self.$el.childNodes[0].style.height = this.style.height;
                    $(this).resize(function() {
                        this.style.height = (self.$el.parentNode.offsetHeight - siblingsHeight -2) + "px";
                        self.$refs.tabContainer.style.height = this.style.height;
                    })
                });
                var $swipeTabsContainer = $(self.element).find('.swipe-tabs'),
                    $swipeTabs = $swipeTabsContainer.find('.swipe-tab'),
                    $swipeTabsContentContainer = $(self.$el).find('.swipe-tabs-container'),
                    currentIndex = 0,
                    activeTabClassName = 'active-tab';

                $swipeTabsContainer.on('init', function(event, slick) {
                    $swipeTabsContentContainer.removeClass('invisible');
                    $swipeTabsContainer.removeClass('invisible');
                    currentIndex = slick.getCurrent();
                    $swipeTabs.removeClass(activeTabClassName);
                    $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
                });

                $swipeTabsContainer.slick({
                    slidesToShow: self.size,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: false,
                    swipeToSlide: true,
                    touchThreshold: 10,
                });

                $swipeTabsContentContainer.slick({
                    asNavFor: $swipeTabsContainer,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: false,
                    swipeToSlide: true,
                    draggable: false,
                    touchThreshold: 10
                });


                $swipeTabs.on('click', function(event) {
                    // gets index of clicked tab
                    currentIndex = $(this).data('slick-index');
                    $swipeTabs.removeClass(activeTabClassName);
                    $swipeTabsContainer.find('.swipe-tab[data-slick-index=' + currentIndex +']').addClass(activeTabClassName);
                    $swipeTabsContainer.slick('slickGoTo', (currentIndex-1));
                    $swipeTabsContentContainer.slick('slickGoTo', currentIndex);
                });

                //initializes slick navigation tabs swipe handler
                $swipeTabsContentContainer.on('swipe', function(event, slick, direction) {
                    currentIndex = $(this).slick('slickCurrentSlide');
                    $swipeTabs.removeClass(activeTabClassName);
                    $swipeTabsContainer.find('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
                    $swipeTabsContainer.slick('slickGoTo', (currentIndex-1));
                    // console.log(currentIndex - 1);
                });

                
            })
        }
    }
</script>