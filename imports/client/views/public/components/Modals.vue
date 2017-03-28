<template>
    <div class="appbar-padding" v-wheight>
        <div style="height: 100%">
            <raised-button @click="show = true">Hello</raised-button>
            <reveal id="hello" v-model="show">
                <div class="col-md-fluid-12">
                    <cards>
                        <cards-image img="/img/a.jpg" v-ripple></cards-image>
                        <divider></divider>
                        <cards-action>

                            <div class="pull-right">
                                <flat-button v-ripple>Cancel</flat-button>
                                <flat-button v-ripple class="primary" @click="show = false">OK</flat-button>
                            </div>
                        </cards-action>
                    </cards>

                </div>

            </reveal>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
            }
        },
        methods: {
            onClick() {
                console.log("hello");
                this.show = !this.show;
            }
        }
    }
</script>