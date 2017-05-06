<template>
    <div class="viu-range-slider-wrap">
        <div class="viu-range-slider" tabindex="0" ref="slider" :class="{ min: value === 0, max: value === maxValue, dragging: dragging }" @mousedown="sliderClick"
            @keydown.left.prevent="decrement" @keydown.right.prevent="increment">
            <div class="viu-range-slider-containment" ref="container"></div>

            <div class="viu-range-slider-wrapper">
                <div class="viu-range-slider-track-container">
                    <div class="viu-range-slider-track"></div>
                    <div class="viu-range-slider-track-fill" :style="{ width: internalValue + '%'}"></div>
                </div>

                <div class="viu-range-slider-thumb-container" ref="thumb">
                    <div class="viu-range-slider-focus-ring"></div>
                    <div class="viu-range-slider-thumb"></div>
                </div>
            </div>
        </div>
        <input type="range" style="width: 400px" v-model="internalValue">
    </div>
</template>


<script>
    import Draggabilly from "draggabilly";
    export default {
        props: {
            value: {
                type: Number,
                default: 50,
            },
            maxValue: {
                type: Number,
                default: 100,
            },
            keyboardStep: {
                type: Number,
                default: 5,
            },
        },
        data() {
            return {
                internalValue: 0,
                dragging: false,
                draggable: null
            };
        },
        mounted() {
            this.internalValue = this.value / this.maxValue * 100;
            this.$refs.thumb.style.left = this.internalValue + '%';
            this.draggable = new Draggabilly(this.$refs.thumb, {
                containment: this.$refs.container,
                axis: 'x'
            });
            this.draggable.on('dragStart', this.dragStart);
            this.draggable.on('dragMove', this.dragMove);
            this.draggable.on('dragEnd', this.dragEnd);
        },

        methods: {
            sliderClick(e) {
                let sliderPosition = this.$refs.slider.getBoundingClientRect();

                let newValue =
                    ((e.clientX - sliderPosition.left) / sliderPosition.width) * 100;

                this.setValue(newValue, true);

                if (e.target !== this.$refs.thumb) {
                    this.draggable._pointerDown(e, e);
                }

                this.$refs.slider.focus();
            },
            dragStart() {
                this.dragging = true;
                this.$refs.slider.focus();
                this.$emit("dragStart");
            },
            dragMove() {
                let x = this.draggable.position.x;
                let newValue = (x / this.$refs.slider.getBoundingClientRect().width) * 100;

                this.setValue(newValue);
                this.$emit("dragMove");                
            },

            dragEnd() {
                this.dragging = false;
                this.$emit("dragEnd");  
            },

            increment() {
                if (this.internalValue === 100) {
                    return;
                }

                this.setValue(this.internalValue + this.keyboardStep, true);
            },

            decrement() {
                if (this.internalValue === 0) {
                    return;
                }

                this.setValue(this.internalValue - this.keyboardStep, true);
            },

            setValue(newValue, updateThumb) {
                if (newValue === this.internalValue) {
                    return;
                }

                // Round the value
                var moderatedValue = newValue;

                // Check for max
                if (moderatedValue >= 100) {
                    moderatedValue = 100;
                }

                // Check for min
                if (moderatedValue <= 0) {
                    moderatedValue = 0;
                }
                this.internalValue = moderatedValue;
                this.$emit("input", this.internalValue/100 * this.maxValue);

                if (updateThumb) {
                    this.$refs.thumb.style.left = this.internalValue + '%';
                }
            }
        }
    }
</script>
