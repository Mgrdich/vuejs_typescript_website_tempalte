<template>
    <footer>
        <div class="container">
            <div>
                <img :src="logoIcon"/>
                <div class="contact">
                    <div>Call us</div>
                    <div>45677-7778</div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
    import * as Logo from '../../assets/images/logo.png';
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Footer extends Vue {
        private logoIcon:string = Logo;
    }

</script>
