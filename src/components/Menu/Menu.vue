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

    type btns = {
        data:Array<string>;
        active:string;
    }

    @Component
    export default class Menu extends Vue {
        private buttons: btns = {
            data: [
                'pizza',
                'burgers',
                'salad',
                'desert'
            ],
            active: 'pizza'
        };
    }
</script>
