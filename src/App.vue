<template>
  <div id="app">
    <Map/>
    <side-bar v-on:openSideBar="openSideBar()"></side-bar>
    <Nav/>
  </div>
</template>

<script>
import Nav from './components/nav/nav.vue'
import SideBar from './components/sideBar/sideBar.vue'
import Map from './components/map/map.vue'

export default {
  name: 'app',
  components: {
    Nav,
    SideBar,
    Map
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Kaushan+Script');
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
