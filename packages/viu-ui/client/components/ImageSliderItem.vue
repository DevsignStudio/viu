<template>
    <div>
        <div class="image-slider-item">
            <img :src="src" :alt="alt">
            <slot></slot>
        </div>
    </div>

</template>

<script>
    import wheight from "../directives/v-wheight.js";
    export default {
        props: {
            src: {
                default: "",
                type: String,
            },
            alt: {
                default: "",
                type: String,
            }
        },
        components: {
            wheight,
        }
    }
</script>