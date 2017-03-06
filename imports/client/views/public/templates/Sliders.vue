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
    import {Snackbar } from "meteor/skynightz93:viu-ui";
    export default {
        methods: {
            nextAction() {
                Snackbar.run("You can redirect to other page here");
            }
        }
    }
</script>