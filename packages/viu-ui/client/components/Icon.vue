<template>
    <i :class="rootClass"></i>
</template>

<script>
export default {
    props: {
        name: String,
    },
    computed: {
        rootClass() {
            return "mdi mdi-" + this.name;
        }
    }
}
</script>
