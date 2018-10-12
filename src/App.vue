<template>
  <div id="app">
    <Nav :flag="true"/>
    <side-bar v-on:openSideBar="openSideBar()"></side-bar>
    <img src="https://maps.googleapis.com/maps/api/staticmap?center=dallas&zoom=12&size=400x800&key=AIzaSyCDKVMsEI5I6K6V4dJzRWBwk1ZA05CK2TE"/>

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
