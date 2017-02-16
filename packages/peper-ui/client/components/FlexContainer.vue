<template>
    <div class="el">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        direction: {
            default: "row",
            type: String,
        }
    },
    mounted() {
        if (this.direction === "column") {
            $(this.$el).addClass("column");
        }
    }
};
</script>

<style scoped>
    .el {
        display: flex; flex-direction: row; height:100vh;
    }

    .el.column {
        flex-direction: column;
    }

</style>
