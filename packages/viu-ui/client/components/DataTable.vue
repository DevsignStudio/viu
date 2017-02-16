<template>
    <cards :class="elClass">
        <scroll-bar>
            <div>
                <slot></slot>
            </div>
        </scroll-bar>
    </cards>
</template>
<script>
    import ScrollBar from './ScrollBar.vue';
    import Helper from "../plugin/class.js"
    import Sugar from 'sugar';
    export default {
        props: {
            sortable: Boolean,
        },
        computed: {
            elClass() {
                return {
                    'cards-table': true,
                    'sortable': this.sortable,
                }
            }
        },
        mounted() {
            var self= this;
            self.$nextTick(() => {
                let $headers = document.querySelectorAll("th:not(.unsortable)");
                for (let i = 0; i < $headers.length; i++) {
                    var icon = document.createElement("i");
                    Helper.addClass(icon, 'mdi');
                    Helper.addClass(icon, 'mdi-arrow-down');
                    Helper.addClass(icon, 'sort-icon');
                    $headers[i].appendChild(icon);
                    $headers[i].addEventListener("click", function() {
                        self.order = 'asc';
                        if (self.$activeHeader) {
                            if (self.$activeHeader === $headers[i]) {
                                Helper.toggleClass(self.$activeHeader, 'desc');
                                self.order = 'desc';
                            } else {
                                Helper.removeClass(self.$activeHeader, 'desc');
                                Helper.removeClass(self.$activeHeader, 'active');
                            }
                        } 
                        Helper.addClass($headers[i], 'active');
                        self.$activeHeader = $headers[i];
                        self.$emit("headerClick", self.$activeHeader.innerText.camelize(false), self.order);
                    });
                }
            });
        }
    }
</script>