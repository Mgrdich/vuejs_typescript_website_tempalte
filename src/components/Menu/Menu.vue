<template>
    <div class="container menu_container">
        <div class="top">
            <h2 v-scroll-reveal>Menu</h2>
            <div class="buttons" v-scroll-reveal="{delay:300}">
                <md-button
                v-for="(btn,index) in buttons.data"
                :key="index"
                :class="btn === buttons.active?'md-raised':''"
                @click="buttons.active=btn"
                >
                    {{btn}}
                </md-button>
            </div>
            <div class="products_items" v-scroll-reveal="{delay:500}">
                <md-card
                        v-for="(product,index) in products"
                        :key="product.name+index"
                        v-show="buttons.active===product.type"
                >
                    <md-card-media md-ratio="16:9">
                        <img :src="require(`../../assets/images/products/${product.img}`)" alt="">
                    </md-card-media>
                    <md-card-header>
                        <h2 class="md-title">
                            {{product.name}}
                        </h2>
                        <div class="md-subhead">
                            <span>${{product.price}}</span>
                        </div>
                    </md-card-header>
                    <md-card-content>
                        {{product.desc}}
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {HttpResponse} from "vue-resource/types/vue_resource";

    type productType = 'pizza'|'burgers'|'salat'|'dessert';
    type btns = {
        data:Array<productType>;
        active:productType
    }
    type product = {
        img:string;
        name:string;
        price:number;
        desc:string;
        type:productType;
    }

    @Component
    export default class Menu extends Vue {
        private products:Array<product> = [];
        private buttons: btns = {
            data: [
                'pizza',
                'burgers',
                'salat',
                'dessert'
            ],
            active: 'pizza'
        };
        created():void {
            this.$http.get('products.json')
                .then((res: HttpResponse) => {
                    return res.json()
                }).then(data => {
                let list:Array<any> = [];
                for (let key in data) {
                    if (data.hasOwnProperty(key)) {
                        list.push({...data[key], id: key});
                    }
                }
                this.products = list;
            })
        }
    }
</script>

<style lang="scss" scoped>
    .md-card {
        width:32%;
        margin-bottom: 20px;
    }
    .products_items {
        display: flex;
        justify-content: space-between;
        flex-wrap:wrap;
    }
</style>
