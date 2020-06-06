<template>
  <div id="app">
    <comp-header></comp-header>
    <div>

    </div>
    <comp-footer></comp-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from "@/components/Header-Footer/Footer.vue";
import Header from "@/components/Header-Footer/Header.vue";

@Component({
  components: {
      'comp-footer':Footer,
      'comp-header':Header
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  @import './assets/style.css';
</style>
