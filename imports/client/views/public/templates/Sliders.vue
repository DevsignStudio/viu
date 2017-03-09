<template>
    <div>
        <slider @finished="nextAction" v-wheight class="background-theme" :has-next-button="true">
            <slider-item>
                <div class="middle-center">
                    <div class="font-display1 color-white">
                        Page 1
                    </div>
                </div>
            </slider-item>
            <slider-item>
                <div class="middle-center">
                    <div class="font-display1 color-white">
                        Page 2
                    </div>
                </div>
            </slider-item>
            <slider-item>
                <div class="middle-center">
                    <div class="font-display1 color-white">
                        Page 3
                    </div>
                </div>
            </slider-item>
            <slider-item>
                <div class="middle-center">
                    <div class="font-display1 color-white">
                        Page 4
                    </div>
                </div>
            </slider-item>
        </slider>
    </div>
    
</template>

<script>
    export default {
        methods: {
            nextAction() {
                this.$snackbar.run("You can redirect to other page here");
            }
        }
    }
</script>