<template>
    <div class="viu-menu-content">
        <scroll-bar>
            <slot></slot>
        </scroll-bar>
    </div>
</template>

<script>
    import ScrollBar from './ScrollBar.vue'; 
    export default {
        mounted() {
            let self = this;

            self.$nextTick(function() {
                self.$el.addEventListener('click', function(e) {
                    e.stopPropagation();
                })
            });
        },
    }
</script>