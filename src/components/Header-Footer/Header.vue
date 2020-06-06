<template>
    <header>
        <div class="container clear">
            <div class="logo">
                <img :src="logoIcon" alt=""/>
            </div>
            <div class="nav">
               <img 
                :src="menuIcon"
                @click="showSidepanel=!showSidepanel"
                 alt=""/>
            </div>

            <md-drawer
                class="side-drawer"
                :md-right="true"
                :md-active.sync="showSidepanel"
            />

        </div>
    </header>
</template>


<script lang="ts">
    import *  as Logo from '../../assets/images/logo.png';
    import * as Menu from '../../assets/images/menu.png';
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Header extends Vue {
        private logoIcon: string = Logo;
        private menuIcon: string = Menu;
        private showSidepanel: boolean = false;


    }
</script>
