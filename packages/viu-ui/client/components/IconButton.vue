<template>
    <div class="viu-icon-button" @click="$emit('click')" @mousedown="$emit('mousedown')" @mouseup="$emit('mouseup')">
        <Icon :name="name"></Icon>
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
