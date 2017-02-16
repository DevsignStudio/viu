<template>
    <div></div>
</template>

<script>
    import c3 from "../plugin/c3/c3.js";

    export default {
        props: {
            dataJson: Object,
            zoom: {
                type: Boolean,
                default: false,
            },
            labels: {
                type: Boolean,
                default: false,
            },
            interaction: {
                type: Boolean,
                default: true,
            },
            tooltip: {
                type: Boolean,
                default: true,
            },
            names: {
                type: Object,
                default: () => {},
            },
            axes: {
                type: Object,
                default: () => {},
            },
            groups: {
                type: Array,
                default: () => [],
            },
            type: {
                type: String,
                default: 'line',
            },
            types: {
                type: Object,
                default: () => {},
            },
            order: {
                type: String,
                default: 'desc',
            },
            hide: {
                type: [Array,Boolean],
                default: false,
            },
            subchart: {
                type: Boolean,
                default: false,
            },
            axis: Object,
            regions: Array,
        },
        data() {
            return {

            }
        },
        mounted() {
            let self = this;
            let el = self.$el;
            self.$nextTick(() => {
                self.$chart = c3.generate(self.generate());
            });
        },
        methods: {
            generate() {
                let self = this;
                let el = self.$el;
                
                let returnVal = {
                    bindto: el,
                    data: {
                        json: self.dataJson,
                        names: self.names,
                        groups: self.groups,
                        axes: self.axes,
                        labels: self.labels,
                        order: self.order,
                        onclick(d, el){
                            self.$emit('dataclick', self.$chart, d, el);
                        },
                        onmouseout(d) {
                            self.$emit('datamouseover', self.$chart, d, el);
                        },
                        onmouseover(d) {
                            self.$emit('datamouseout', self.$chart, d, el);
                        }
                    },
                    axis: self.axis,
                    regions: self.regions,
                    zoom: {enabled: self.zoom},
                    interaction: {enabled: self.interaction},
                    oninit() {
                        self.$emit('init');
                    },
                    onrendered() {
                        self.$emit("rendered");
                    },
                    onmouseover() {
                        self.$emit("mouseover");
                    },
                    onmouseout() {
                        self.$emit("mouseout");
                    },
                    onresized() {
                        self.$emit("resized");
                    },
                    onresize() {
                        self.$emit("resize");
                    },
                    subchart: {
                        show: self.subchart,
                    },
                    tooltip: {show: self.tooltip},
                    legend: {
                        item: {
                            onclick(id) {
                                self.$emit('legendclick', self.$chart, id);
                            }
                        }
                    }
                }

                if (!self.types) {
                    returnVal.data.type = self.type;
                } else {
                    returnVal.data.types = self.types;
                }

                if (self.keys) {
                    returnVal.data.keys.value = self.keys;
                }

                return returnVal;
            },
            load() {
                let self= this;
                console.log(self.dataJson);
                let returnVal = {
                    json: self.dataJson,
                }

                if (self.keys) {
                    returnVal.data.keys.value = self.keys;
                }

                return returnVal;
            }
        },
        watch: {
            dataJson() {
                this.$chart.load(this.load());
            }        
        }
    }
</script>


