<template>
    <div class="call_us_container">
        <div class="container">
            <div class="first" v-scroll-reveal="{delay:200,scale:2}">
                <h1>Hungry ?</h1>
            </div>
            <div class="second"  v-scroll-reveal="{delay:400,afterReveal:toggleAnim}">
                <div v-if="secondAnim">
                    <comp-animation></comp-animation>
                </div>
            </div>
            <div class="third" v-scroll-reveal="{delay:600,scale:2}">
                <span>Give us a call</span> <span>6666-3399</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component,Vue} from "vue-property-decorator";
    import Animation from "@/components/CallUs/Animation.vue";

    @Component({
        components: {
            'comp-animation':Animation
        }
    })
    export default class CallUs extends Vue{
        private secondAnim:boolean = false;
        public toggleAnim() {
            this.secondAnim = true;
        }
    }
</script>
