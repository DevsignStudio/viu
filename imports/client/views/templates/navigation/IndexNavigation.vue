<template>
    <side-navigation v-depth="1">
        <img src="/img/a.jpg" class="img-responsive" alt="">
        <navigation></navigation>
    </side-navigation>
</template>

<script>
    import Navigation from "./Navigation.vue";

    export default {
        components:{
            Navigation,
        }
    }
</script>