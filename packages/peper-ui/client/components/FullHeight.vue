<template>
    <div style="display: flex;height: 100vh; flex-direction: column; ">
        <slot name="header">

        </slot>
        <div style="display: flex;flex: 1;  overflow:hidden;">
            <slot>

            </slot>
        </div>
        <slot name="footer">

        </slot>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
        }
    },
}
</script>
