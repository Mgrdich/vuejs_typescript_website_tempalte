<template>
    <div>
        <carousel
           :per-page="1"
           :mouse-drag="true"
           :paginationEnabled="false"
        >
            <slide v-for="(item,ind) in slides" :key="ind">
                <div
                    class="slider_bck"
                    :style="{'background':`url(${item.bck})`}"
                >
                    <div class="container slider-container">
                        <div class="text">
                            <div>{{item.text}}</div>
                        </div>
                        <div class="image">
                            <img :src="item.img"/>
                        </div>
                    </div>
                </div>

            </slide>
        </carousel>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import { Carousel, Slide } from 'vue-carousel';
    import slideBck from '../../assets/images/slide_bck.jpg';
    import slideBck2 from '../../assets/images/slide_bck2.jpg';

    import pizzaOne from '../../assets/images/pizza_one.png';
    import pizzaTwo from '../../assets/images/pizza_three.png';

    type slides = {
        text:string;
        bck:string;
        img:string;
    }

    @Component({
        components: {
            'carousel':Carousel,
            'slide':Slide
        }
    })
    export default class Featured extends Vue {
        private slides:Array<slides> = [
            {
                text:'20% OFF ON ALL PIZZAS',
                bck: slideBck,
                img: pizzaOne
            },
            {
                text:'BUY TWO, GET ONE FREE',
                bck: slideBck2,
                img: pizzaTwo
            }
        ];
    }
</script>
