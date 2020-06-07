<template>
    <div class="anim_container">
        <transition
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                appear
        >
            <div class="icon icon_phone" data-delay="0" data-left="100"></div>
        </transition>

        <transition
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                appear
        >
            <div class="plus one" data-delay="100" data-left="310">+</div>
        </transition>

        <transition
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                appear
        >
            <div class="icon icon_delivery" data-delay="200" data-left="480"></div>
        </transition>

        <transition
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                appear
        >
            <div class="plus" data-delay="300" data-left="750">=</div>
        </transition>

        <transition
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                appear
        >
            <div class="icon icon_pizza" data-delay="400" data-left="900"></div>
        </transition>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Animation extends Vue {
        private animation:Array<any> = [];
         public beforeEnter(el:HTMLBodyElement):void {
            el.style.left = '-200px';
            el.style.opacity = '0';
         }

        public enter(el: HTMLBodyElement, done: any): void {
            let d: string | null = el.getAttribute('data-delay');
            let l: string | null = el.getAttribute('data-left');
            let attrDelay: string = !!d ? d : '';
            let attrLeft: string = !!l ? l : '';
            let delay: number = parseInt(attrDelay);
            let left: number = parseInt(attrLeft);
            Velocity(el, {opacity: 1, left}, {delay, duration: 2000, complete: done});
        }
    }
</script>


<style lang="scss" scoped>
    .anim_container {
        position:relative;
        height:200px;
    }

    .icon {
        background-size: cover !important;
        position: absolute;
    }

    .plus {
        position: absolute;
        font-size:160px;
        color:#ffffff;
        top:90px
    }

    .icon_phone {
        background: url('../../assets/images/icons/icon-phone.png');
        width:130px;
        height:130px;
        top:30px
    }

    .icon_delivery {
        background: url('../../assets/images/icons/icon-delivery.png');
        width:200px;
        height:200px;
    }
    .icon_pizza {
        background: url('../../assets/images/icons/icon-pizza.png');
        width:200px;
        height:200px;
    }

</style>