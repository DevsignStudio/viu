<template> 
    <div :class="elClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                default: "single",
                type: String,
            },
            dense: {
                default: true,
                type: Boolean,
            }
        },
        computed: {
            elClass() {
                return {
                    'viu-list': true,
                    'single-line': this.type === 'single',
                    'double-line': this.type === 'double',
                    'triple-line': this.type === 'triple',
                    'not-auto-dense': !this.dense,
                }
            }
        }
    }
</script>
