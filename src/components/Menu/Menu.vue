<template>
    <div class="container menu_container">
        <div class="top">
            <h2>Menu</h2>
            <div class="buttons">
                <md-button
                v-for="(btn,index) in buttons.data"
                :key="index"
                :class="btn === buttons.active?'md-raised':''"
                @click="buttons.active=btn"
                >
                    {{btn}}
                </md-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {HttpResponse} from "vue-resource/types/vue_resource";

    type btns = {
        data:Array<string>;
        active:string;
    }

    @Component
    export default class Menu extends Vue {
        private  products:Array<any> = [];
        private buttons: btns = {
            data: [
                'pizza',
                'burgers',
                'salad',
                'desert'
            ],
            active: 'pizza'
        };

        created() {
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
