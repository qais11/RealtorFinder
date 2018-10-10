<template>
  <div id="app">
    <Nav :flag="true"/>
    <side-bar v-on:openSideBar="openSideBar()"></side-bar>
  </div>
</template>

<script>
import Nav from './components/nav/nav.vue'
import SideBar from './components/sideBar/sideBar.vue'

export default {
  name: 'app',
  components: {
    Nav,
    SideBar
  },
  methods: {
    openSideBar() {
      console.log('triggered');
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
