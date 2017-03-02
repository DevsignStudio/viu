<template>
    <div class="bellows">
        <slot></slot>
    </div>
</template>

<script>
    import 'mobify-plugin/dist/plugin.min';
    import 'velocity-animate/velocity';
    import 'bellows-ui';
    import 'bellows-ui/dist/bellows.css';

    export default {
        props: {
            collapsible: {
                type: Boolean,
                default: false,
            }
        },
        mounted() {
            this.$nextTick(function() {
                $(this.$el).bellows({
                    singleItemOpen: this.collapsible,
                });
            })
            
        }
    }
</script>