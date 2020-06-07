<template>
    <div class="anim_container">
        <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        appear
        >
            <div class="icon icon_phone">

            </div>
        </transition>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    console.log(Velocity);
    @Component
    export default class Animation extends Vue {
         public beforeEnter(el:HTMLBodyElement):void {
            el.style.left = '-200px';
            el.style.opacity = '0';
         }

        public enter(el: HTMLBodyElement, done: boolean): void {
            let attrDelay:string =  el.getAttribute('delay')?el.getAttribute('delay')+'':''; //Typescript complie error
            let attrLeft:string =  el.getAttribute('left')?el.getAttribute('left')+'':''; //Typescript complie error
            let delay:number = parseInt(attrDelay);
            let left:number = parseInt(attrLeft);

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