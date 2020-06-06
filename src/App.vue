<template>
  <div id="app">
    <comp-header></comp-header>
    <div>
      <comp-featured></comp-featured>
      <comp-menu></comp-menu>
    </div>
    <comp-footer></comp-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from "@/components/Header-Footer/Footer.vue";
import Header from "@/components/Header-Footer/Header.vue";
import Featured from "@/components/Featured/Featured.vue";
import Menu from "@/components/Menu/Menu.vue";

@Component({
  components: {
    'comp-footer': Footer,
    'comp-header': Header,
    'comp-featured': Featured,
    'comp-menu': Menu
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  @import './assets/style.css';
</style>
