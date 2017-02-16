<template>
    <div class="peper-avatar">
        <span class="no-margin">{{firstChar}}</span>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                default: undefined,
                type: String,
            },
            background: {
                default: undefined,
            }
        },
        computed: {
            firstChar() {
                if (this.text) {
                    return this.text.toUpperCase().charAt(0);
                }
                return null;
            },
            backgroundColor() {

            }
        },
        mounted() {
            var self = this;
            self.$nextTick(function() {
                if (self.background) {
                    $(self.$el).css('background', self.background);
                    return;
                } else {
                    var myColor = [
                        '#f44336',
                        '#E91E63',
                        '#9c27b0',
                        '#673ab7',
                        '#3f51b5',
                        '#2196F3',
                        '#039be5',
                        '#0097a7',
                        '#009688',
                        '#43a047',
                        '#689f38',
                        '#ff8f00',
                        '#ff9800',
                        '#ff5722',
                        '#795548',
                        '#757575',
                        '#607d8b'
                    ]

                    var rand = myColor[Math.floor(Math.random() * myColor.length)];
                    $(self.$el).css('background-color', rand);
                }
            });
        }
    }
</script>
