<template>
  <div id="app">     
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M139.75,100.33333c0,30.08208 -23.6715,53.75 -53.75358,53.75c-30.08208,0 -53.74642,-23.66792 -53.74642,-53.75c0,-30.08208 48.29975,-55.18333 42.85308,-82.41667c10.89692,0 64.64692,38.84692 64.64692,82.41667z" fill="#dd2c00"></path><path d="M118.25,114.66667c0,-27.22975 -32.25,-53.75 -32.25,-53.75c0,21.78667 -32.25,31.96692 -32.25,53.75c0,18.04567 14.20075,32.25 32.25,32.25c18.04925,0 32.25,-14.20433 32.25,-32.25z" fill="#ff5722"></path><path d="M68.07975,126.8715c0.00358,-12.20483 17.92025,-19.18875 17.92025,-30.1215c0,0 17.91308,13.73133 17.91308,30.1215c0,9.04792 -8.01592,16.39017 -17.91667,16.39017c-9.90075,0 -17.92025,-7.33867 -17.91667,-16.39017z" fill="#ffc107"></path></g></g></svg>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

svg {
  width: 6rem;
  height: auto;
}
</style>
