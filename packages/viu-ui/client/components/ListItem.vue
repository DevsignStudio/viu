<template>
    <div class="viu-list-item" >
        <div class="left-content">
            <slot name="left"></slot>
        </div>
        <div class="content" @click="$emit('click')">
            <div>
                <slot></slot>
            </div>
        </div>
        <div class="right-content">
            <slot name="right"></slot>
        </div>
    </div>
</template>

