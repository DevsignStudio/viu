<template>
    <div class="viu-icon-button" @click="$emit('click')" @mousedown="$emit('mousedown')" @mouseup="$emit('mouseup')">
        <icon @click="$emit('click')" :name="name"></icon>
    </div>
</template>

<script>
import Icon from "./Icon.vue";
export default {
    props: {
        name: String,
    },
    components: {
        Icon,
    },
}
</script>
